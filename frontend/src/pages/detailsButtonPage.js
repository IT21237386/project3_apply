import React, { useEffect, useState } from 'react';
import Navbar from '../components/templates/NavBar';
import Footer from '../components/templates/Footer';
import '../css/detailsButtonPage.css';
import calendarImg from '../assets/Calander Logo.png';
import clockImg from '../assets/Clock Logo.png';
import emailImg from '../assets/Mail Logo.png';
import locationImg from '../assets/Map Pin.png';
import goUpImg from '../assets/Double Up.png'; // Add this line

function MainPage() {
    const [jobData, setJobData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [recommendedJobs, setRecommendedJobs] = useState([]);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const jobId = urlParams.get("id") || 1; // Default to job ID 1 if none is provided

        // Fetch job details
        fetch(`http://localhost:7000/job/${jobId}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    setJobData(data[0]);
                } else {
                    console.log("Job not found");
                    setJobData(null);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching job data:", error);
                setLoading(false);
                setJobData(null);
            });

        // Fetch recommended jobs
        fetch(`http://localhost:7000/jobs`)
            .then(response => response.json())
            .then(data => {
                setRecommendedJobs(data);
            })
            .catch(error => console.error("Error fetching recommended jobs:", error));

        }, []);

        useEffect(() => {
            // Set random background colors for recommended job cards
            const colors = ['#F9F6FD', '#FDF4E3', '#F8FCED', '#FEFDEB', '#F5F8FF', '#FAF0EF'];
            let prevColor = null;
        
            // Wait for recommended jobs to be loaded before setting colors
            if (recommendedJobs.length > 0) {
                const jobCards = document.querySelectorAll('.karw-job-card-header');
                jobCards.forEach(card => {
                    let randomColor;
                    do {
                        randomColor = colors[Math.floor(Math.random() * colors.length)];
                    } while (randomColor === prevColor);
                    
                    card.style.backgroundColor = randomColor;
                    prevColor = randomColor;
                });
            }
        }, [recommendedJobs]);

    const handleJobClick = (id) => {
        window.location.href = `?id=${id}`;
    };

    const handleGoUpClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!jobData) {
        return <div>Job not found.</div>;
    }

    // Map company names to their respective banner and logo images
    const companyAssets = {
        "Unilever": {
            banner: require("../assets/uniliver banner.png"),
            logo: require("../assets/uniliver logo.png"),
        },
        "HCL Tech": {
            banner: require("../assets/hcl banner.png"),
            logo: require("../assets/hcl logo.png"),    
        },
        "FD Fashion": {
            banner: require("../assets/shoe banner.png"),
            logo: require("../assets/shoe logo.png"),    
        },
        "ADIDAS": {
            banner: require("../assets/adidas banner.png"),
            logo: require("../assets/adidas logo.png"),    
        },
        "Adobe": {
            banner: require("../assets/adobe banner.png"),
            logo: require("../assets/adobe logo.png"),    
        },
        "Nike": {
            banner: require("../assets/nike banner.png"),
            logo: require("../assets/nike logo.png"),    
        },

        // add more companies as needed
    };

    const jobImage = {
        "Junior Frontend Developer": {
            jobTypeImage: require("../assets/develpoer vector.png"),
        },
        "Warehouse Assistant": {
            jobTypeImage: require("../assets/rb_21485247142.png"),
        },
        "Store Manager": {
            jobTypeImage: require("../assets/manager vector 1.png"),
        },
        "UI/UX Designer": {
            jobTypeImage: require("../assets/designer vector.png"),
        },
        "Customer Representative": {
            jobTypeImage: require("../assets/Customer Represntative vector.png"),
        },
        "Front Office Executive": {
            jobTypeImage: require("../assets/Front Office vector.png"),
        },
        "Intern IT Admin": {
            jobTypeImage: require("../assets/IT admin vector.png"),
        },

        // add more images as needed
    };

    jobImage[".NET Developer"] = jobImage["Junior Frontend Developer"];
    jobImage["Senior Backend Engineer"] = jobImage["Junior Frontend Developer"];

    const bannerToShow = companyAssets[jobData.company_name]?.banner;
    const logoToShow = companyAssets[jobData.company_name]?.logo;

    return (
        <div className="karw-details-button-container">
            <Navbar />
            <div className="karw-details-button-main-content">
                <div className="karw-details-button-image-section">
                    <img src={bannerToShow} alt="Banner" className="karw-banner-image" />
                    <div className="karw-small-image-wrapper">
                        <img src={logoToShow} alt="Company Logo" className="karw-small-image" />
                    </div>
                </div>

                <div className="karw-detail-section">
                    <div className="karw-job-layout">
                        <div className="karw-job-description">
                            <h1>{jobData.job_title}</h1>
                            <p>{jobData.description}</p>
                        </div>
                        <div className="karw-job-image">
                            <img src={jobImage[jobData.job_title]?.jobTypeImage} alt={jobData.job_title} />
                        </div>
                    </div>

                    <div className="karw-icon-section">
                        {[
                            { label: jobData.period, subLabel: "Period", image: calendarImg },
                            { label: jobData.job_type, subLabel: "Job Type", image: clockImg },
                            { label: jobData.contact_email, subLabel: "Contact Email", image: emailImg },
                            { label: jobData.location, subLabel: "On-Site", image: locationImg },
                        ].map((item, index) => (
                            <div key={index} className="karw-icon-item">
                                <div className="karw-icon">
                                    <img src={item.image} alt={item.label} className="karw-icon-image" />
                                </div>
                                <div className="karw-icon-text">
                                    <p className="karw-main-text">{item.label}</p>
                                    <p className="karw-sub-text">{item.subLabel}</p>
                                </div>
                                {index < 3 && <div className="karw-vertical-line"></div>}
                            </div>
                        ))}
                    </div>

                    <h2>Your Role</h2>
                    <p>{jobData.your_role}</p>

                    <h2>Skills</h2>
                    <div className="karw-skills-section">
                        {jobData.skills.split(',').map(skill => (
                            <div key={skill} className="karw-skill-item">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="karw-apply-button-container">
                    <button className="karw-apply-button">Apply Now</button>
                </div>

                {/* Recommended Jobs Section */}
                <div className="karw-recommended-job-section">
                    <h2>Recommended Jobs</h2>
                    <div className="karw-job-list">
                        {recommendedJobs
                            .filter(job => job.id !== jobData.id)
                            .map((job, index) => (
                                <div key={index} className="karw-job-card">
                                    <div className="karw-job-card-header">
                                        <div className="karw-bookmark"></div>
                                        <div className="karw-job-title">{job.job_title}</div>
                                    </div>
                                    <div className="karw-job-card-footer">
                                        <img src={companyAssets[job.company_name]?.logo} alt="Company Logo" className="karw-job-card-image" />
                                        <div className="karw-company-info">
                                            <span className="karw-company-name">{job.company_name}</span>
                                            <span className="karw-company-type">{job.company_type}</span>
                                        </div>
                                        <button className="karw-details-button" onClick={() => handleJobClick(job.id)}>Details</button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <div className="karw-container3">
                <Footer />
            </div>

            <button className="karw-go-up-button" onClick={handleGoUpClick}>
                <img src={goUpImg} alt="Go Up" className="karw-go-up-icon" />
            </button>
        </div>
    );
}

export default MainPage;
