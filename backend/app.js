import express from "express";
import cors from "cors";
import mantraRoutes from "./routes/mantraRoutes.js";
import contactUsImageRotes from "./routes/contact-us/contactUsImageRoutes.js";
import contactUsFormRoutes from "./routes/contact-us/contactUsFormRotes.js";
import registrationRoutes from "./routes/work-with-us/registrationRoutes.js";
import teamImageRoutes from "./routes/work-with-us/teamImageRoutes.js";
import governanceRoutes from "./routes/work-with-us/governanceRoutes.js";
import dailyActivitiesRoutes from "./routes/work-with-us/dailyActivitiesRoutes.js";
import gainVisibilityRoutes from "./routes/work-with-us/gainVisibilityRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: err?.message ?? "Internal server error",
  });
};

export const app = express();

// using middlewares
app.use(express.json());

// Configure CORS to allow requests from your React application's origin
const corsOptions = {
  origin: "http://localhost:5174",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // if you need to handle cookies
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// apis
app.use("/api", contactUsFormRoutes);
app.use("/api", contactUsImageRotes);
app.use("/api", registrationRoutes);
app.use("/api", teamImageRoutes);
app.use("/api", governanceRoutes);
app.use("/api", dailyActivitiesRoutes);
app.use("/api", gainVisibilityRoutes);
app.use("/api", mantraRoutes);
app.use("/api", galleryRoutes);

app.use(errorHandler);
