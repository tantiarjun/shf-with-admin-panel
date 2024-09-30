import express from "express";
import {
  addRegistrationData,
  getRegisteredUserData,
} from "../../controllers/work-with-us-controllers/registration.js";

const router = express.Router();

// Route for registration form submission
router.post("/registrationform", addRegistrationData);

// Route for getting regisetred data
router.get("/registerduserdata", getRegisteredUserData);

export default router;
