import multerS3 from "multer-s3";
import multer from "multer";
import { config } from "dotenv";
import { s3Client } from "../aws/awsconfig.js";

config({
  path: "./data/config.env",
});

export const uploadImageToS3 = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: process.env.S3_BUCKET_NAME,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});
