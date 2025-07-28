const crypto = require('crypto');

// Verify Razorpay signature
exports.verifyRazorpaySignature = (razorpayOrderId, razorpayPaymentId, razorpaySignature, secret) => {
    const sign = razorpayOrderId + "|" + razorpayPaymentId;
    const expectedSign = crypto
        .createHmac("sha256", secret)
        .update(sign.toString())
        .digest("hex");
    
    return razorpaySignature === expectedSign;
};

// Format amount to paise
exports.formatAmountToPaise = (amount) => {
    return Math.round(amount * 100);
};

// Format paise to rupees
exports.formatPaiseToRupees = (paise) => {
    return paise / 100;
};
