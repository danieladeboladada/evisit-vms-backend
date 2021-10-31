"use strict";

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const occupantSchema = new mongoose.Schema(
  {
    occupantName: { name: String, required: true },
    address: { type: String, required: true },
    email: { type: String },
    mobile: { type: String, required: true },
    location: { type: ObjectId, ref: "Location" },
    visiteeId: { type: ObjectId, ref: "User" },
  },
  {
    collection: "occupants",
    timestamps: true,
  },
);

const Occupant = mongoose.model("Occupant", occupantSchema);
module.exports = Occupant;
