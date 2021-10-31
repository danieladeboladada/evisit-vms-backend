"use strict";
const mongoose = require("mongoose");

// this should be populated by the service provider
const locationSchema = new mongoose.Schema(
  {
    number: { type: String, required: true },
    street: { type: String, required: true },
    lga: { type: String },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  {
    collection: "locations",
    timestamps: true,
  },
);

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
