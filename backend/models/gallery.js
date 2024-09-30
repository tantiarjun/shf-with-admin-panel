import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  eventType: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

export default mongoose.model("gallery", gallerySchema);
