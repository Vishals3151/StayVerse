const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().allow("", null),
    category: Joi.string()
      .valid(
        "apartment",
        "house",
        "cottage",
        "villa",
        "bungalow",
        "chalet",
        "beach house"
      ),
  }).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});

module.exports.bookingSchema = Joi.object({
    listingId: Joi.string().required(),
    checkIn: Joi.date().required(),
    checkOut: Joi.date().greater(Joi.ref('checkIn')).required(),
    guests: Joi.number().required().min(1).max(10),
});
