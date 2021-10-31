"use strict";

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const covidScreeningSchema = new mongoose.Schema(
  {
    outOfCountrySinceLast14Days: {
      type: Boolean,
      required: true,
    },
    closeContactTestedPositive: {
      type: Boolean,
      required: true,
    },
    closeContactWithRespiratorySymtoms: {
      type: Boolean,
      required: true,
    },
    hasFever: {
      type: Boolean,
      required: true,
    },
    listOfSymtoms: [
      {
        name: {
          type: String,
          required: true,
          enum: [
            "chills",
            "worseningCough",
            "barkingCough",
            "shortnessOfBreath",
            "lostOfTasteOrSmell",
            "pinkEye",
            "unusualHeadache",
            "nauseaVomiting",
            "musleAche",
            "fatiqueMalaise",
            "fallingMoveThanUsual",
          ],
        },
        checked: { type: Boolean, default: false },
      },
    ],
    visitorId: { type: ObjectId, ref: "Visitor" },
    visiteeId: { type: ObjectId, ref: "User" },
  },
  {
    collection: "covidScreeningData",
    timestamps: true,
  },
);

const CovidScreening = mongoose.model("CovidScreening", covidScreeningSchema);
module.exports = CovidScreening;
