import mongoose from "mongoose";

const contactusImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const contactusImage = mongoose.model(
  "ContactusImage",
  contactusImageSchema
);
