import mongoose from "mongoose";

const ourGovernanceImageSchema = new mongoose.Schema({
  ImageUrl: {
    type: String,
    requried: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("governanceImage", ourGovernanceImageSchema);
