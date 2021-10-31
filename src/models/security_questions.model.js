"use strict";

const mongoose = require("mongoose");

const securityQuestionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
  },
  {
    collection: "securityQuestions",
    timestamps: true,
  },
);

const SecurityQuestion = mongoose.model(
  "SecurityQuestion",
  securityQuestionSchema,
);
module.exports = SecurityQuestion;
