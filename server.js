const express = require("express");
const cors = require("cors");
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
require("dotenv").config();

// Configure AWS
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
const s3 = new aws.S3();

// Configure Multer
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: "public-read",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString());
    },
  }),
});

// Routes
// Route for accepting single file as upload and responds with url of uploaded file in s3
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ fileUrl: req.file.location });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
