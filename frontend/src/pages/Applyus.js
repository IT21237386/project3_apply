import React, { useState } from "react";
import Navbar from "../components/templates/NavBar";
import Footer from "../components/templates/Footer";
import "../css/Applyus.css";
import sampleImage from "../assets/office3.jpeg"; // Replace with actual image
import logo from "../assets/logo.png"; // Adjust path if needed

function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    experience: "",
    email: "",
    mobile: "",
    resume: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("experience", formData.experience);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("mobile", formData.mobile);
    formDataToSend.append("resume", formData.resume);
  
    try {
      const response = await fetch("http://localhost:5000/apply-job", {
        //http://localhost:5000/send-email to sending mail. use this API
        method: "POST",
        body: formDataToSend,
      });
  
      if (response.ok) {
        alert("Application submitted successfully!");
      } else {
        alert("Failed to submit application.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the application.");
    }
  };

  return (
    <div className="apply-page">
      {/* <Navbar /> */}

     
      
      <div className="apply-container">
        {/* Left Side - Form */}
        
        <div className="apply-form-section">
         {/* Logo  */}
        <div className="logo-container">
    <img src={logo} alt="Company Logo" className="company-logo" />
  </div>

          <h2>Apply Now</h2>
          <p>This is your chance, apply soon.</p>
          <form onSubmit={handleSubmit}>
            
          <div className="input-group">
    <div className="input-field">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>

    <div className="input-field">
      <label htmlFor="experience">How many years Experience do you?</label>
      <input
        type="number"
        id="experience"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        required
      />
    </div>
  </div>

  <div className="input-group">
    <div className="input-field">
      <label htmlFor="email">Email address</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div className="input-field">
      <label htmlFor="mobile">Mobile number</label>
      <input
        type="tel"
        id="mobile"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        required
      />
    </div>
  </div>

            {/* File Upload */}
            <div className="file-upload">
              <label>Upload CV/Resume</label>
              <input type="file" accept=".pdf" onChange={handleFileUpload} />
              <p>Only PDF format available. Max file size 12 MB.</p>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="apply-image-section">
          <img src={sampleImage} alt="Teamwork" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ApplyPage;