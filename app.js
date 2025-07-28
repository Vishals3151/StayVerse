// ✅ Import Required Modules
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config(); // Load environment variables from .env file
}

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate"); // Enable layout support for EJS templates
const ExpressError = require("./utils/ExpressError.js"); // Custom error handling class
const session = require("express-session"); // Express session middleware
const MongoStore = require("connect-mongo");
const flash = require("connect-flash"); // Flash messaging for success/error messages
const passport = require("passport"); // Authentication middleware
const LocalStrategy = require("passport-local"); // Local authentication strategy
const User = require("./models/user.js"); // User model

// Route modules
const ListingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const paymentRouter = require("./routes/payment.js");

// ✅ App Initialization
const app = express();

// ✅ EJS & View Engine Setup
app.engine("ejs", ejsMate); // Use ejsMate as the template engine
app.set("view engine", "ejs"); // Set EJS as the default view engine
app.set("views", path.join(__dirname, "views")); // Set the views directory

// ✅ Middleware Configuration
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(express.static(path.join(__dirname, "public"))); // Serve static files (CSS, JS, images)
app.use(methodOverride("_method")); // Enable support for PUT & DELETE via query parameter (_method)

// ✅ MongoDB Connection

const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ Error connecting to MongoDB:", err);
  });

async function main() {
  await mongoose.connect(dbUrl); // Local MongoDB connection
}

// ✅ Session Configuration
const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.log("ERROR in MONGO SESSION STORE", err);
});

const sessionOption = {
  store: store,
  secret: process.env.SECRET, // Secret for signing session ID cookies
  resave: false, // Prevent resaving unchanged sessions
  saveUninitialized: true, // Save uninitialized sessions
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // Cookie expiration (7 days)
    maxAge: 7 * 24 * 60 * 60 * 1000, // Max age (7 days)
    httpOnly: true, // Prevent client-side JS from accessing the cookie
  },
};

app.use(session(sessionOption)); // Enable session support
app.use(flash()); // Enable flash messages

// ✅ Passport Configuration
app.use(passport.initialize()); // Initialize passport
app.use(passport.session()); // Enable persistent login sessions
passport.use(new LocalStrategy(User.authenticate())); // Use local strategy with User model

passport.serializeUser(User.serializeUser()); // Serialize user into the session
passport.deserializeUser(User.deserializeUser()); // Deserialize user from the session

// ✅ Set Locals for Views
app.use((req, res, next) => {
  res.locals.success = req.flash("success"); // Success message
  res.locals.error = req.flash("error"); // Error message
  res.locals.currentUser = req.user; // Current logged-in user
  next();
});

// ✅ Route Handlers

// Listings CRUD routes
app.use("/listings", ListingRouter);

// Reviews routes (nested under listings)
app.use("/listings/:id/reviews", reviewRouter);

// User authentication routes
app.use("/", userRouter);

// Payment routes
app.use("/payments", paymentRouter);

app.get("/", async (req, res) => {
  res.redirect("/listings"); // Render home page with listings
});
// ✅ Catch-All 404 Handler
app.all(/.*/, (req, res, next) => {
  next(new ExpressError(404, "PAGE NOT FOUND!!!")); // Pass 404 to error handler
});

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something Went Wrong!" } = err;
  res.status(statusCode).render("error.ejs", { message }); // Render error page
});

// ✅ Start the Server
app.listen(8080, () => {
  console.log("🚀 Server is running on port 8080");
});
