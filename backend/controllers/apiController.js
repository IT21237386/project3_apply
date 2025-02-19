const { sendEmail } = require("./Email");
const upload = require("./FileUpload");
const db = require("../utils/db");

// Function to handle form submission and insert data into the applyjob table
const handleApplyJob = (req, res) => {
  const { name, experience, email, mobile } = req.body;
  const resumePath = req.file.path; // Path to the uploaded file

  // Insert data into the applyjob table
  const query = `
    INSERT INTO applyjob (name, email, mobile_number, experience_years, cv_resume)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [name, email, mobile, experience, resumePath],
    (error, results) => {
      if (error) {
        console.error("Error inserting data into applyjob table:", error);
        res.status(500).send("Error submitting application");
      } else {
        console.log("Data inserted into applyjob table:", results);
        res.status(200).send("Application submitted successfully");
      }
    }
  );
};




// Function to handle the form submission and file upload
const handleFormSubmission = (req, res) => {
  const { name, experience, email, mobile } = req.body;
  const resumePath = req.file.path;

  // Use the sendEmail function from Email.js
  sendEmail(name, experience, email, mobile, resumePath, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
};

module.exports = { handleFormSubmission ,handleApplyJob};