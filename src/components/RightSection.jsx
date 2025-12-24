import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Footer from './Footer'; // <--- THIS WAS MISSING!

const RightSection = () => {
  return (
    <div className="right-section">
      <About />
      <div className="spacer"></div>
      
      <Skills />
      <div className="spacer"></div>
      
      <Projects />
      <div className="spacer"></div>
      
      <Education />
      
      <div className="spacer"></div>
      
      <Footer />
      
      {/* Extra breathing room at the very bottom */}
      <div style={{height: '50px'}}></div> 
    </div>
  );
};

export default RightSection;