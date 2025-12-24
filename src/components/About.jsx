import React from 'react';
import { FaTrophy, FaCode, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="section-title">About Me</h2>
      <p className="about-text">
        I am a Second Year CSE undergraduate passionate about building scalable web applications and exploring Machine Learning solutions. 
        I enjoy solving complex algorithmic problems and turning ideas into efficient, softwares and ML automations.
      </p>

      {/* Achievement Badges */}
      <div className="achievements-row">
        <div className="badge">
          <FaTrophy className="badge-icon" />
          <span>1300+ CodeChef Rating</span>
        </div>
        <div className="badge">
          <FaCode className="badge-icon" />
          <span>500+ LeetCode</span>
        </div>
        <div className="badge">
          <FaLaptopCode className="badge-icon" />
          <span>Hackathon Winner</span>
        </div>
      </div>
    </div>
  );
};

export default About;