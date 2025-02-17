require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");
// const db = require("./utils/db");

const app = express();
const PORT = process.env.PORT || 5000; // Use the PORT from .env, fallback to 5000 if undefined

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  
  const upload = multer({ storage });

// Email configuration
const transporter = nodemailer.createTransport({
    service: "gmail", // Use Gmail or any other service
    auth: {
      user: "kavindasithum127@gmail.com", // Replace with your email
      pass: "vctv xlau neun iere", // Replace with your email password or app-specific password
    },
  });

// API endpoint to handle form submission
app.post("/send-email", upload.single("resume"), (req, res) => {
    const { name, experience, email, mobile } = req.body;
    const resumePath = req.file.path;
  
    const mailOptions = {
      from: "kavindasithum127@gmail.com", // Sender email
      to: "kwpchamikara99@gmail.com", // Recipient email
      subject: "New Job Application",
      html: `
        <h1>New Job Application</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Experience:</strong> ${experience} years</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
      `,
      attachments: [
        {
          filename: req.file.originalname,
          path: resumePath,
        },
      ],
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
        res.status(200).send("Email sent successfully");
      }
    });
  });
  



// Test Route
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
