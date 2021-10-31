"use strict";

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String },
    email: { type: String, required: true },
    mobile: { type: String },
    visiteeLocation: { type: ObjectId, ref: "Location" },
    visiteeFacilities: [{ type: ObjectId, ref: "VisiteeFacility" }],
    visiteeId: { type: ObjectId, ref: "User" },
    visitorType: {
      type: String,
      default: "guest",
      enum: ["guest", "registered", "admin"],
    },
    purpose: { type: String },
    appointmentTime: { type: Date, required: true },
    covidScreenDataId: { type: ObjectId, ref: "CovidScreeningData" },
    visiteeResponseStatus: {
      type: Boolean,
      default: "pending",
      enum: ["pending", "allowed", "declined"],
    },
  },
  {
    collection: "visitors",
    timestamps: true,
  },
);

const Visitor = mongoose.model("Visitor", userSchema);
module.exports = Visitor;
