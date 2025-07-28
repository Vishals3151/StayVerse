const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const Booking = require("../models/booking.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl, isLoggedIn } = require("../middlewear.js");
const userController = require("../controlers/user.js");

router
  .route("/signup")
  .get(userController.renderSignUpForm)
  .post(wrapAsync(userController.signUp));

router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login
  );

router.get("/bookings", isLoggedIn, wrapAsync(userController.getBookings));

router.get("/logout", userController.logout);

module.exports = router;
