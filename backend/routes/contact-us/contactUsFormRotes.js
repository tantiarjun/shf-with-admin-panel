import express from "express";
import {
  addContacusdata,
  getContactusdata,
} from "../../controllers/contact-us-controllers/form.js";

const router = express.Router();

// Route for get contactus data
router.get("/contactusdata", getContactusdata);

// Route for contact us form submission
router.post("/contactusform", addContacusdata);

export default router;
