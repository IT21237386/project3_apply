import React, { useEffect, useState } from 'react';
import Navbar from '../components/templates/NavBar';
import Footer from '../components/templates/Footer';
import '../css/careerPage.css';
import hclBanner from '../assets/pexels-fauxels-3184357.png';
import logo from '../assets/logo.png';
import applyNowImage from '../assets/we-are-hiring-digital-collage.png';
import careersImage from '../assets/smiley-man-work-holding-laptop-posing.png';
import photo1 from '../assets/Rectangle 340.png';
import photo2 from '../assets/Rectangle 340 (1).png';
import photo3 from '../assets/Rectangle 340 (2).png';
import goUpImg from '../assets/Double Up.png'; // Import the Go Up image

export default function CareerPage() {
    const [recommendedJobs, setRecommendedJobs] = useState([]);
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        // Fetch recommended jobs
        fetch(`http://localhost:7000/jobs`)
            .then(response => response.json())
            .then(data => {
                setRecommendedJobs(data);
            })
            .catch(error => console.error("Error fetching recommended jobs:", error));
    }, []);

    const handleJobClick = (id) => {
        window.location.href = `details?id=${id}`;
    };

    const handleJobFilterClick = (jobTitle) => {
        console.log(`Filter by job title: ${jobTitle}`);
    };

    const handleSearch = () => {
        console.log(`Searching for: ${jobTitle} in ${location}`);
    };

    const handleGoUpClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const companyAssets = {
        "Unilever": {
            logo: require("../assets/uniliver logo.png"),
        },
        "HCL Tech": {
            logo: require("../assets/hcl logo.png"),
        },
        "FD Fashion": {
            logo: require("../assets/shoe logo.png"),
        },
        "ADIDAS": {
            logo: require("../assets/adidas logo.png"),
        },
        "Adobe": {
            logo: require("../assets/adobe logo.png"),
        },
        "Nike": {
            logo: require("../assets/nike logo.png"),
        },

        // add more companies as needed
    };

    return (
        <>
            <Navbar />
            <div className="karw-career-header">
                <div className="karw-overlay1"></div>
                <img className="karw-career-background" src={hclBanner} alt="Career Background" />
                <div className="karw-career-logo-wrapper">
                    <div className="karw-overlay2"></div>
                    <img className="karw-career-logo" src={logo} alt="Logo" />
                </div>
                <h1 className="karw-career-title">CAREERS</h1>
            </div>

            <div className="karw-job-title-filter">
                <h2>Job Titles</h2>
                <div className="karw-job-title-box">
                <div className="karw-job-title-buttons">
                    {["Software Engineer", "Data Analyst", "IT Support Specialist", "Product Manager", "Business Analyst", "Financial Analyst", "Graphic Designer", "Account Manager"].map((title) => (
                        <button key={title} onClick={() => handleJobFilterClick(title)} className="karw-job-title-button">
                            {title}
                        </button>
                    ))}
                </div>
                </div>
                
            </div>
            
            <div className="karw-search-container">
                <div className="karw-search-box">
                <input
                    type="text"
                    placeholder="Job Title"
                    className="karw-search-input"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Location"
                    className="karw-search-input2"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                </div>
                <button className="karw-search-button" onClick={handleSearch}>Search</button>
            </div>

            <div className="karw-job-list-title">
                <h2>Top Job Picks For You</h2>
            </div>
            <div className="karw-job-filter-section">
                <div className="karw-filter-experience-container">
                    <div className="karw-filter-card">
                        <h4>Filter</h4>
                        <label><input type="checkbox" /> Full Time</label>
                        <label><input type="checkbox" /> Part Time</label>
                        <label><input type="checkbox" /> Contract</label>
                        <label><input type="checkbox" /> Intern</label>
                    </div>

                    <div className="karw-experience-card">
                        <h4>Experience</h4>
                        <label><input type="checkbox" /> Under 1 Year</label>
                        <label><input type="checkbox" /> 1-2 Years</label>
                        <label><input type="checkbox" /> 2-6 Years</label>
                        <label><input type="checkbox" /> Over 6 Years</label>
                    </div>
                </div>
                <div className="karw-job-list-title2">
                    <h5>Top Job Picks For You</h5>
                </div>

                <div className="karw-recommended-jobs">
                    <div className="karw-recommended-job-cards">
                        {recommendedJobs.slice(0, Math.ceil(recommendedJobs.length / 2)).map((job, index) => (
                            <div key={index} className="karw-recommended-job-card" onClick={() => handleJobClick(job.id)}>
                                <div className="karw-recommended-job-card-header">
                                    <div className="karw-recommended-job-title">{job.job_title}</div>
                                    <div className="karw-bookmark-icon"></div>
                                </div>
                                <div className="karw-recommended-job-card-footer">
                                    <img src={companyAssets[job.company_name]?.logo} alt="Company Logo" className="karw-recommended-job-card-image" />
                                    <div className="karw-recommended-job-company-info">
                                        <span className="karw-recommended-job-company-name">{job.company_name}</span>
                                        <span className="karw-recommended-job-company-type">{job.company_type}</span>
                                    </div>
                                    <button className="karw-recommended-details-button">Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="karw-recommended-job-cards">
                        {recommendedJobs.slice(Math.ceil(recommendedJobs.length / 2)).map((job, index) => (
                            <div key={index} className="karw-recommended-job-card" onClick={() => handleJobClick(job.id)}>
                                <div className="karw-recommended-job-card-header">
                                    <div className="karw-recommended-job-title">{job.job_title}</div>
                                    <div className="karw-bookmark-icon"></div>
                                </div>
                                <div className="karw-recommended-job-card-footer">
                                    <img src={companyAssets[job.company_name]?.logo} alt="Company Logo" className="karw-recommended-job-card-image" />
                                    <div className="karw-recommended-job-company-info">
                                        <span className="karw-recommended-job-company-name">{job.company_name}</span>
                                        <span className="karw-recommended-job-company-type">{job.company_type}</span>
                                    </div>
                                    <button className="karw-recommended-details-button">Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="karw-careers-section">
                <div className="karw-careers-image">
                    <img src={careersImage} alt="Careers" />
                </div>
                <div className="karw-careers-content">
                    <h2>Careers</h2>
                    <p>
                        Gamage Recruiters Pvt Ltd, a growing executive search firm, prioritizes emerging markets, efficiently filling executive talent pools for businesses' potential and competence retention. Strategic global expansion involves diverse talent collaboration and information sharing.
                    </p>
                </div>
            </div>

            <div className="karw-job-count-section">
                <div className="karw-job-count-box">
                    <div className="karw-job-count-item">
                        <span>100+</span>
                        <span>Job Available</span>
                    </div>
                    <div className="karw-job-count-item">
                        <span>100+</span>
                        <span>Top Companies</span>
                    </div>
                    <div className="karw-job-count-item">
                        <span>100+</span>
                        <span>Candidates Hired</span>
                    </div>
                </div>
            </div>

            <div className="karw-apply-now-section">
                <div className="karw-apply-now-content">
                    <h2>Apply Now</h2>
                    <p>
                        We are excited to welcome motivated and qualified individuals to our team! If you meet the qualifications and are passionate about contributing to our success, we encourage you to apply. Submit your updated resume along with a cover letter detailing your suitability for the role to [email@example.com]. Alternatively, click the 'Apply Now' button on our careers page to complete the application process. Applications will be reviewed on a rolling basis, so don’t wait—apply today!
                    </p>
                </div>
                <div className="karw-apply-now-image">
                    <img src={applyNowImage} alt="Apply Now" />
                </div>
            </div>

            <div className="karw-why-choose-us-section">
                <h2>Why Choose Us</h2>
                <p>We offer tailored recruitment solutions backed by a proven track record and industry expertise. With an extensive network, innovative sourcing techniques, and a client-centric approach, we ensure the right talent for your business. Committed to diversity, transparency, and cost-effective results, we also provide post-placement support for long-term success.</p>
            </div>

            <div className="karw-photo-gallery">
                <div className="karw-photo-wrapper">
                    <div className="karw-overlay3"></div>
                    <img src={photo1} alt="Office Img 1" />
                </div>
                <div className="karw-photo-wrapper">
                    <div className="karw-overlay3"></div>
                    <img src={photo2} alt="Office Img 2" />
                </div>
                <div className="karw-photo-wrapper">
                    <div className="karw-overlay3"></div>
                    <img src={photo3} alt="Office Img 3" />
                </div>
            </div>

            <Footer />

            <button className="karw-go-up-button" onClick={handleGoUpClick}>
                <img src={goUpImg} alt="Go Up" className="karw-go-up-icon" />
            </button>
        </>
    );
}
