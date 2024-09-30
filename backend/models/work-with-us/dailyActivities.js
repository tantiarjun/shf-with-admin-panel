import mongoose from "mongoose";

const dailyActivites = new mongoose.Schema({
  title: {
    type: String,
    requried: true,
  },

  description: {
    type: String,
    requried: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("dailyActivites", dailyActivites);
