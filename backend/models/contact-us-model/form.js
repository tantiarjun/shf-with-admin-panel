import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    requried: true,
  },

  email: {
    type: String,
    requried: true,
  },

  location: {
    type: String,
    requried: true,
  },

  phone: {
    type: Number,
    requried: true,
  },

  message: {
    type: String,
    requried: true,
  },
});

export const userData = mongoose.model("contactusData", dataSchema);
