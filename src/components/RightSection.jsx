import React from 'react';
import Navigation from './Navigation';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Footer from './Footer';

const RightSection = () => {
  return (
    <div className="right-section">
      <Navigation />
      
      <section id="about" className="scroll-section"><About /></section>
      <div className="spacer"></div>
      
      <section id="skills" className="scroll-section"><Skills /></section>
      <div className="spacer"></div>
      
      <section id="experience" className="scroll-section"><Experience /></section>
      <div className="spacer"></div>
      
      <section id="projects" className="scroll-section"><Projects /></section>
      <div className="spacer"></div>
      
      <section id="education" className="scroll-section"><Education /></section>
      <div className="spacer"></div>
      
      <section id="contact" className="scroll-section"><Footer /></section>
      
      <div style={{height: '80px'}}></div> {/* Extra room for mobile footer */}
    </div>
  );
};

export default RightSection;