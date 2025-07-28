// ✅ Import Required Modules
const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken }); // Initialize geocoding client

// ✅ Filter Map for Category-based Search
const filterMap = {
  luxury: { category: { $in: ["villa", "apartment"] }, price: { $gt: 3000 } },
  cozy: { category: "cottage" },
  adventure: { category: "chalet" },
  nature: { category: { $in: ["cottage", "chalet"] } },
  beach: { category: "chalet" }, // Filter based on category (regex could be applied to location instead)
  unique: { tags: "unique" }, // Requires 'tags' array field in schema
  family: { tags: "family" },
  budget: { price: { $lte: 2500 } },
};

// ✅ List All Listings (with optional filter)
module.exports.index = async (req, res) => {
  const filterLabel = req.query.category; // Extract filter label from query

  let filter = {};
  if (filterLabel && filterMap[filterLabel]) {
    filter = filterMap[filterLabel]; // Apply corresponding filter
  }

  // Default: show all listings if no filter
  let allListings = await Listing.find(filter);

  res.render("listings/index.ejs", {
    allListings,
    activeFilter: filterLabel || "featured", // Highlight active filter in UI
  });
};

// ✅ Render Form for New Listing
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

// ✅ Show Single Listing
module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } }) // Populate nested review authors
    .populate("owner"); // Populate owner details

  if (!listing) {
    req.flash("error", "Listing Does not found");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", { listing });
};

// ✅ Create New Listing
module.exports.createListing = async (req, res) => {
  // Geocode the location string to get coordinates
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  // Get image URL and filename from uploaded file
  let url = req.file.path;
  let filename = req.file.filename;

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id; // Associate listing with logged-in user
  newListing.image = { url, filename }; // Attach image
  newListing.geometry = response.body.features[0].geometry; // Save geolocation

  let savedListing = await newListing.save();
  req.flash("success", "New Listing Created");
  res.redirect("/listings");
};

// ✅ Render Edit Form for Listing
module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing Does not found");
    return res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250"); // Resize for preview

  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

// ✅ Update Listing
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;

  // Update the listing with form data
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  // If a new image is uploaded, update it
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated");
  res.redirect(`/listings/${id}`);
};

// ✅ Delete Listing
module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted");
  res.redirect("/listings");
};

// ✅ Autocomplete Search API (AJAX)
module.exports.searchListings = async (req, res) => {
  const query = req.query.q;
  if (!query) return res.json([]);

  try {
    const matches = await Listing.find(
      { title: { $regex: query, $options: "i" } }, // Case-insensitive search
      { title: 1 } // Only return title field
    ).limit(5); // Limit to 5 results

    const titles = matches.map((l) => l.title);
    res.json(titles);
  } catch (err) {
    console.error(err);
    res.status(500).json([]);
  }
};

// ✅ Full Search Result Page
module.exports.resultSearch = async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.redirect("/listings"); // Redirect if query is empty
  }

  try {
    const listings = await Listing.find({
      title: { $regex: query, $options: "i" }, // Match title with query
    });

    res.render("listings/searchResult", { listings }); // Render result page
  } catch (err) {
    console.error("Search route error:", err);
    res.status(500).send("Internal Server Error");
  }
};
