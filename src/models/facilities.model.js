"use strict";

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const facitySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    location: { type: ObjectId, ref: "Location" },
    visiteeId: { type: ObjectId, ref: "User" },
  },
  {
    collection: "facilities",
    timestamps: true,
  },
);

const Facility = mongoose.model("Facility", facitySchema);
module.exports = Facility;
