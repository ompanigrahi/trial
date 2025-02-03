import React from "react";
import "./About.css";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">ABOUT US</h2>
      <div className="about-content">
        {/* Background Image Section */}
        <img src="/images/garden123.png" alt="Beautiful Garden" className="about-image" />
        {/* Text Content */}
        <div className="about-text">
          <h3>Hello Clients,</h3>
          <p>
            At <strong className="text-green-800 underline">Balaji Services</strong>, we are committed to providing top-quality home and garden services to keep your surroundings clean, beautiful, and well-maintained. Our expert team specializes in tree cutting for safety and aesthetics, house coloring to refresh your home’s look, and housekeeping for a spotless living space. We also offer plot cleaning to clear debris, garden maintenance to nurture your greenery, and grass cutting for a well-manicured lawn. With a focus on professionalism, efficiency, and customer satisfaction, we ensure every service meets the highest standards, helping you create a clean, organized, and visually appealing environment.
          </p>
        </div>
      </div>
      {/* Footer */}
      <footer className="about-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default About;
