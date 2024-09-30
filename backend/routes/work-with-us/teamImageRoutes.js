import express from "express";
import { uploadImageToS3 } from "../../middlewares/multerS3.js";
import {
  getTeamImageUrl,
  uploadTeamImagesUrlToDB,
} from "../../controllers/work-with-us-controllers/teamImage.js";

const router = express.Router();

router.post(
  "/teamimage",
  uploadImageToS3.array("images", 3),
  uploadTeamImagesUrlToDB
);

router.get("/teamimage", getTeamImageUrl);

export default router;
