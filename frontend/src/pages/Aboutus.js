import Navbar from "../components/templates/NavBar"
import Footer from "../components/templates/Footer"
import { Building2, Users, Globe2, BarChart3, Mail, Phone, AlignLeft } from "lucide-react"
import "../css/AboutUs.css"

function AboutUs() {
  return (
    <div className="about-container">
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>ABOUT US</h1>
          <h2>GAMAGE RECRUITERS: CONNECTING TALENT </h2>
          <h2>AND OPPORTUNITY </h2>
          <p>
            Gamage Recruiters is a leading recruiting search and recruitment agency specializing in emerging markets. We
            connect businesses with top talent to optimize their growth and create long-term success.
          </p>
        </div>
      </div>

      {/* Empowering Business Section */}
      <section className="section-container">
        <h2 className="section-title">EMPOWERING BUSINESSES IN EMERGING MARKETS</h2>
        <div className="card-grid">
          <div className="info-card">
            <h3>Maximize Potential</h3>
            <p>
              We help businesses efficiently fill their talent needs, maximize their growth potential and retain their
              competence.
            </p>
          </div>
          <div className="info-card">
            <h3>Strategic Leverage</h3>
            <p>We strategically leverage a diverse pool of talent to meet the unique needs of various industries.</p>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="section-container dark">
  <h2 className="section-title">GLOBAL REACH, LOCAL EXPERTISE</h2>
  <div className="card-grid">
    <div className="feature-card">
      <Globe2 className="icon" size={32} />
      <h3>Global Footprint</h3>
      <p>
        We help businesses efficiently fill their talent needs, maximize their growth potential and retain their
        competence.
      </p>
    </div>
    <div className="feature-card">
      <Users className="icon" size={32} />
      <h3>Diversity in the Workplace</h3>
      <p>We collaborate with businesses to drive up good practices and create inclusive workplaces.</p>
    </div>
  </div>
</section>

      {/* Diversity Section */}
      <section className="section-container">
        <h2 className="section-title">DIVERSITY AND INCLUSION AT THE CORE</h2>
        <div className="image-grid">
          <div className="image-card">
          <img
            src={require('../assets/diversityintheworkplace.jpg')}
            alt="Diversity in the Workplace"
            />
            <h3>Diversity in the Workplace</h3>
          </div>
          <div className="image-card">
            <img
              src={require('../assets/globalpresense.jpg')}
              alt="Global Presence"
            />
            <h3>Global Presence</h3>
          </div>
          <div className="image-card">
            <img
              src={require('../assets/clientmeeting.jpg')}
              alt="Understanding Client Needs"
            />
            <h3>Understanding and Meeting Client Needs</h3>
          </div>
        </div>
      </section>

      {/* Leadership Gaps Section */}
      <section className="section-container light-blue">
        <h2 className="section-title">FILLING LEADERSHIP GAPS</h2>
        <div className="service-grid">
          <div className="service-card">
            <Building2 className="icon" />
            <h3>Executive Search</h3>
            <p>Specialized in executive search, helping businesses find the right leaders for sustainable growth.</p>
          </div>
          <div className="service-card">
            <Users className="icon" />
            <h3>Talent Acquisition</h3>
            <p>We provide comprehensive talent acquisition solutions to help businesses find and retain top talent.</p>
          </div>
          <div className="service-card">
            <BarChart3 className="icon" />
            <h3>Recruitment Process Outsourcing (RPO)</h3>
            <p>We offer RPO services to help businesses streamline their recruitment processes.</p>
          </div>
        </div>
      </section>

      {/* Data Driven Approach */}
      {
  /* Update Data Driven Approach section */
}
<section className="section-container dark">
  <h2 className="section-title">A DATA-DRIVEN APPROACH</h2>
  <div className="steps-container">
    <div className="step">
      <div className="step-number">1</div>
      <p>WE USE PROPRIETARY TECHNOLOGY AND DATA ANALYTICS TO IDENTIFY AND CONNECT WITH TOP TALENT</p>
    </div>
    <div className="step">
      <div className="step-number">2</div>
      <p>WE ARE COMMITTED TO BUILDING MEANINGFUL CONNECTIONS BETWEEN BUSINESSES AND TALENT</p>
    </div>
    <div className="step">
      <div className="step-number">3</div>
      <p>WE ENSURE LONG-TERM SUCCESS THROUGH CONTINUOUS SUPPORT AND FOLLOW-UP</p>
    </div>
  </div>
</section>



      {/* Stay Connected Section */}
      <section className="section-container">
        <h2 className="section-title">STAY CONNECTED WITH GAMAGE RECRUITERS</h2>
        <div className="contact-container">
          <div className="contact-image">
            <img
              src={require('../assets/tayconnected.jpg')}
              alt="Stay Connected"
            />
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <Mail className="icon" />
              <p>Follow us on LinkedIn for real-time updates on job openings.</p>
            </div>
            <div className="contact-item">
              <Phone className="icon" />
              <p>Contact us via email for any inquiries related to your staffing or search requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section-container light-blue">
        <h2 className="section-title">OUR COMMITMENT TO SUCCESS</h2>
        <div className="metrics-container">
          <div className="metric">
            <h3>100+</h3>
            <p>Clients</p>
            <span>We have successfully helped over 100+ organizations fill their leadership positions.</span>
          </div>
          <div className="metric">
            <h3>95%</h3>
            <p>Placement Rate</p>
            <span>We have a high placement rate, demonstrating our commitment to delivering results.</span>
          </div>
          <div className="metric-image">
          <img
              src={require('../assets/commitmentsucces.jpg')}
              alt="Team Success"
            />
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="section-container dark partner-section">
  <div className="partner-content">
    <h2>PARTNER WITH US</h2>
    <p>
      Ready to build a high-performing team and reach your goals? Partner with Gamage Recruiters and let us help you
      find the talent you need.
    </p>
    <button className="contact-button">Contact Us</button>
  </div>
</section>



      <Footer />
    </div>
  )
}

export default AboutUs

