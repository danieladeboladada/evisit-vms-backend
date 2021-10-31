"use strict";

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String },
    email: { type: String, required: true },
    mobile: { type: String },
    password: { type: String },
    securityQuestion1: {
      type: ObjectId,
      ref: "SecurityQuestion",
      Required: true,
    },
    securityAnswer1: { type: String, Required: true },
    securityQuestion2: {
      type: ObjectId,
      ref: "SecurityQuestion",
      Required: true,
    },
    securityAnswer2: { type: String, Required: true },
    noFailedLogins: { type: Number, default: 0, Required: true },
    userFacilities: [{ type: ObjectId, ref: "Facility" }],
    userfacilityOccupants: [{ type: ObjectId, ref: "Occupant" }],
    location: { type: ObjectId, ref: "Location" },
    role: {
      type: String,
      default: "registered",
      enum: ["admin", "guest", "registered"],
    },
  },
  {
    collection: "users",
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);
module.exports = User;
