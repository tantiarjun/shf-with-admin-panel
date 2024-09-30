import express from "express";
import {
  getMantra,
  updateCheckboxState,
  uploadMantra,
} from "../controllers/mantraController.js";

import { uploadImageToS3 } from "../middlewares/multerS3.js";

const router = express.Router();

router.post("/mantra", uploadImageToS3.single("photo"), uploadMantra);
router.get("/mantra", getMantra);
router.post("/update-checkbox-state", updateCheckboxState);

export default router;
