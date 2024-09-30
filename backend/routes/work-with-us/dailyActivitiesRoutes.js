import express from "express";
import {
  addDailyActivites,
  getDailyActivities,
} from "../../controllers/work-with-us-controllers/dailyActivities.js";

const router = express.Router();

router.post("/activities", addDailyActivites);
router.get("/activities", getDailyActivities);

export default router;
