const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const Booking = require("../models/booking.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middlewear.js");

// Initialize Razorpay instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Show checkout page
router.get("/checkout/:listingId", isLoggedIn, async (req, res) => {
    try {
        const { listingId } = req.params;
        const listing = await Listing.findById(listingId);
        
        if (!listing) {
            req.flash("error", "Listing not found");
            return res.redirect("/listings");
        }
        
        res.render("payments/checkout.ejs", { 
            listing,
            razorpayKeyId: process.env.RAZORPAY_KEY_ID,
            currentUser: req.user
        });
    } catch (err) {
        console.error(err);
        req.flash("error", "Something went wrong");
        res.redirect("/listings");
    }
});

// Create Razorpay order
router.post("/create-order", isLoggedIn, async (req, res) => {
    try {
        const { listingId, checkIn, checkOut, guests } = req.body;
        const listing = await Listing.findById(listingId);
        
        if (!listing) {
            return res.status(404).json({ error: "Listing not found" });
        }

        // Calculate total amount
        const nights = Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
        const totalAmount = listing.price * nights;

        // Create Razorpay order
        const options = {
            amount: totalAmount * 100, // Amount in paise
            currency: 'INR',
            receipt: `receipt_${Date.now()}`,
            notes: {
                listingId: listingId,
                userId: req.user._id.toString(),
                checkIn,
                checkOut,
                guests
            }
        };

        const order = await razorpay.orders.create(options);
        
        // Save booking with pending status
        const newBooking = new Booking({
            user: req.user._id,
            listing: listingId,
            checkIn,
            checkOut,
            guests,
            totalAmount,
            razorpayOrderId: order.id
        });
        
        await newBooking.save();

        res.json({
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            key: process.env.RAZORPAY_KEY_ID
        });
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create order" });
    }
});

// Verify payment
router.post("/verify-payment", isLoggedIn, async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
        
        // Verify signature
        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest("hex");

        if (razorpay_signature === expectedSign) {
            // Payment verified successfully
            const booking = await Booking.findOne({ razorpayOrderId: razorpay_order_id });
            
            if (booking) {
                booking.razorpayPaymentId = razorpay_payment_id;
                booking.razorpaySignature = razorpay_signature;
                booking.paymentStatus = "completed";
                booking.bookingStatus = "confirmed";
                
                await booking.save();
                
                req.flash("success", "Payment successful! Your booking is confirmed.");
                res.json({ status: "success", bookingId: booking._id });
            } else {
                res.status(404).json({ error: "Booking not found" });
            }
        } else {
            res.status(400).json({ error: "Invalid signature" });
        }
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Payment verification failed" });
    }
});

// Payment success page
router.get("/success", isLoggedIn, (req, res) => {
    res.render("payments/success.ejs");
});

module.exports = router;
