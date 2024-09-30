import mongoose from "mongoose";

const gainVisibilitySchema = new mongoose.Schema({
  image1: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
    requried: true,
  },
  image3: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("gainVisibility", gainVisibilitySchema);
