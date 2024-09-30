import express from "express";
import {
  getContactusImageUrl,
  uploadImage,
} from "../../controllers/contact-us-controllers/image.js";

import { uploadImageToS3 } from "../../middlewares/multerS3.js";

const router = express.Router();

router.post("/contactusimage", uploadImageToS3.single("photo"), uploadImage);

router.get("/contactusimage", getContactusImageUrl);

export default router;
