import express from "express";
import { uploadImageToS3 } from "../middlewares/multerS3.js";
import {
  getGalleryImageUrl,
  uploadImageUrlToDB,
} from "../controllers/galleryController.js";

const router = express.Router();
router.post("/gallery", uploadImageToS3.single("image"), uploadImageUrlToDB);
router.get("/gallery", getGalleryImageUrl);

export default router;
