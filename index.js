const express = require("express");
const env = require("dotenv");
const multer = require("multer");
const mongoose = require("mongoose");
const students = require("./routes/students");
const payments = require("./routes/payments");
const donations = require("./routes/donations");
const volunteers = require("./routes/volunteers");
const { errorResponse } = require("./utils/errorHandler");

// define app
const app = express();

// config dotenv
env.config();

// file upload config
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + "-" + file.originalname);
	},
});
const upload = multer({
	storage,
	fileFilter: function (req, file, cb) {
		// restrict file types to images only
		if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
			cb("file type is not allowed");
		}
		cb(null, true);
	},
});
// middleweres
app.use(
	express.json({ limit: "50mb" }),
	express.urlencoded({ extended: true, limit: "50mb" }),
	upload.single("profilePicture")
);

// db connection
mongoose.connect(process.env.DB_URI).catch((err) => {
	if (err) throw err;
});
console.log("DB CONNECTION SUCCESSFUL");

// app routes
app.use("/api/students", students);
app.use("/api/donations", donations);
app.use("/api/payments", payments);
app.use("/api/volunteers", volunteers);

// start server
app.listen(process.env.PORT, (err, info) => {
	if (err) throw err;
	else console.log(`server is running on port ${process.env.PORT}`);
});
