import express from "express";
import { uploadImageToS3 } from "../../middlewares/multerS3.js";
import {
  getGainVisibilityImageAndData,
  uploadGainVisibilityImageAndData,
} from "../../controllers/work-with-us-controllers/gainVisibility.js";

const router = express.Router();

router.post(
  "/gainvisibility",
  uploadImageToS3.array("images", 3),
  uploadGainVisibilityImageAndData
);

router.get("/gainvisibility", getGainVisibilityImageAndData);

export default router;
