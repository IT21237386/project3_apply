require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { handleFormSubmission } = require("./controllers/apiController");
const upload = require("./controllers/FileUpload");
const db = require("./utils/db");

const app = express();
const PORT = process.env.PORT || 5000; // Use the PORT from .env, fallback to 5000 if undefined

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API endpoint to handle form submission
app.post("/send-email", upload.single("resume"), handleFormSubmission);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});