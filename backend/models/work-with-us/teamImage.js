import mongoose from "mongoose";

const TeamImageSchema = new mongoose.Schema({
  mainImageUrl: {
    type: String,
    required: true,
  },
  imageUrl1: {
    type: String,
    required: true,
  },
  imageUrl2: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("TeamImage", TeamImageSchema);
