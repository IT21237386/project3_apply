const nodemailer = require("nodemailer");

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // Use Gmail or any other service
  auth: {
    user: process.env.USER, // Replace with your email
    pass: process.env.PASSWORD, // Replace with your email password or app-specific password
  },
});

// Function to send email
const sendEmail = (name, experience, email, mobile, resumePath, callback) => {
  const mailOptions = {
    from: process.env.FROM, // Sender email
    to: process.env.TO, // Recipient email
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
        filename: resumePath.split("/").pop(), // Extract filename from path
        path: resumePath,
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      callback(error, null);
    } else {
      console.log("Email sent:", info.response);
      callback(null, info);
    }
  });
};

module.exports = { sendEmail };