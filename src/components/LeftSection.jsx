import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaDownload } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiGeeksforgeeks, SiCodeforces } from 'react-icons/si';

const LeftSection = () => {
  return (
    <div className="left-section">
      
      {/* 1. Profile Area */}
      <div className="profile-container">
        <img src="/profile.jpg" alt="Yash Kumar" className="profile-img" />
        <h1 className="profile-name">Yash Kumar</h1>
      </div>

      {/* 2. Social Links Row */}
      <div className="social-row">
        <a href="mailto:yashkumar18ch@gmail.com" className="social-icon"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/yashkumar1801/" target="_blank" className="social-icon"><FaLinkedin /></a>
        <a href="https://twitter.com" target="_blank" className="social-icon"><FaTwitter /></a>
        <a href="https://github.com/yashkumar181" target="_blank" className="social-icon"><FaGithub /></a>
      </div>

      {/* 3. Resume Button */}
      <a href="/resume.pdf" download className="resume-btn">
        Get Resume <FaDownload style={{ marginLeft: '8px' }} />
      </a>

      {/* 4. Details */}
      <div className="details-container">
        <div className="detail-item">
          <FaMapMarkerAlt className="detail-icon" /> <span>India</span>
        </div>
        <div className="detail-item">
          <FaGraduationCap className="detail-icon" /> <span>Jaypee University of Engineering & Technology</span>
        </div>
      </div>

      <div className="divider"></div>

      {/* 5. Coding Profiles (Stats) - Grid Layout */}
      <div className="coding-profiles">
        <h3 className="section-subtitle">Problem Solving</h3>
        
        <div className="profiles-grid">
          <a href="https://leetcode.com/u/yashkumfux/" target="_blank" className="profile-item box-style">
            <SiLeetcode className="brand-icon leetcode" /> <span>LeetCode</span>
          </a>

          <a href="https://codechef.com" target="_blank" className="profile-item box-style">
            <SiCodechef className="brand-icon codechef" /> <span>CodeChef</span>
          </a>

          <a href="https://www.geeksforgeeks.org/profile/yashkumfux" target="_blank" className="profile-item box-style">
            <SiGeeksforgeeks className="brand-icon gfg" /> <span>GFG</span>
          </a>

          <a href="https://codeforces.com" target="_blank" className="profile-item box-style">
            <SiCodeforces className="brand-icon codeforces" /> <span>CodeForces</span>
          </a>
        </div>
      </div>

    </div>
  );
};

export default LeftSection;