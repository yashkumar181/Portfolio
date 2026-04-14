import React from 'react';
import { FaUser, FaCode, FaBriefcase, FaFolder, FaGraduationCap, FaEnvelope, FaWallet } from 'react-icons/fa';

const Navigation = () => {
  return (
    <>
      {/* Desktop Top Nav */}
      <nav className="top-nav">
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#education" className="nav-link">Education</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="bottom-nav">
        <a href="#about" className="bottom-nav-link">
          <FaUser className="nav-icon" />
          <span className="nav-text">About</span>
        </a>
        <a href="#skills" className="bottom-nav-link">
          <FaCode className="nav-icon" />
          <span className="nav-text">Skills</span>
        </a>
        <a href="#experience" className="bottom-nav-link">
          <FaBriefcase className="nav-icon" />
          <span className="nav-text">Experience</span>
        </a>
        <a href="#projects" className="bottom-nav-link">
          <FaFolder className="nav-icon" />
          <span className="nav-text">Projects</span>
        </a>
        <a href="#education" className="bottom-nav-link">
          <FaGraduationCap className="nav-icon" />
          <span className="nav-text">Education</span>
        </a>
        <a href="#contact" className="bottom-nav-link">
          <FaEnvelope className="nav-icon" />
          <span className="nav-text">Contact</span>
        </a>
      </nav>
    </>
  );
};

export default Navigation;