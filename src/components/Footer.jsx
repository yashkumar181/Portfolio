import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-card">
        <p className="contact-text">
          I am currently looking for full-time opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        <a href="mailto:yashkumar18ch@gmail.com" className="contact-btn">
          <FaEnvelope /> Say Hello
        </a>
      </div>
      
      <div className="copyright">
        <p>Designed & Built by <span>Yash Kumar</span></p>
        <p className="copyright-year">© 2025</p>
      </div>
    </div>
  );
};

export default Footer;