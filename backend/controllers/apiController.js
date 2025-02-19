const { sendEmail } = require("./Email");
const upload = require("./FileUpload");

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

module.exports = { handleFormSubmission };