import React, { useState } from "react";
import Navbar from "../components/templates/NavBar";
import Footer from "../components/templates/Footer";
import "../../css/Apply.css";
import sampleImage from "../../assets/sample-image.jpg"; // Replace with actual image

// function ApplyPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     experience: "",
//     email: "",
//     mobile: "",
//     resume: null,
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileUpload = (e) => {
//     setFormData({ ...formData, resume: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     // Handle form submission
//   };

//   return (
//     <div className="apply-page">
//       <Navbar />
//       <div className="apply-container">
//         {/* Left Side - Form */}
//         <div className="apply-form-section">
//           <h2>Apply Now</h2>
//           <p>This is your chance, apply soon.</p>
//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="number"
//                 name="experience"
//                 placeholder="How many years Experience do you?"
//                 value={formData.experience}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="tel"
//                 name="mobile"
//                 placeholder="Mobile number"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* File Upload */}
//             <div className="file-upload">
//               <label>Upload CV/Resume</label>
//               <input type="file" accept=".pdf" onChange={handleFileUpload} />
//               <p>Only PDF format available. Max file size 12 MB.</p>
//             </div>

//             <button type="submit" className="submit-btn">Submit</button>
//           </form>
//         </div>

//         {/* Right Side - Image */}
//         <div className="apply-image-section">
//           <img src={sampleImage} alt="Teamwork" />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
// export default ApplyForm;