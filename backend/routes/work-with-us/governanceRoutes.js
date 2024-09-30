import express from "express";

import { uploadImageToS3 } from "../../middlewares/multerS3.js";
import {
  getGovernanceImageUrl,
  uploadGovernanceImage,
} from "../../controllers/work-with-us-controllers/Governance.js";

const router = express.Router();

router.post(
  "/ourgovernance",
  uploadImageToS3.single("photo"),
  uploadGovernanceImage
);

router.get("/ourgovernance", getGovernanceImageUrl);

export default router;
