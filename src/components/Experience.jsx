import React from 'react';
import { FaBriefcase, FaStar } from 'react-icons/fa';

const Experience = () => {
  return (
    <div className="education-container"> 
      <h2 className="section-title">Experience</h2>

      <div className="timeline">
        
        {/* ITEM 1: INTERNSHIP */}
        <div className="timeline-item">
          <div className="timeline-dot-container">
            <div className="timeline-dot">
              <FaBriefcase />
            </div>
          </div>
          
          <div className="timeline-content">
            <div className="edu-card">
              
              {/* Flex container to align title left and date right */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '4px' }}>
                <h3 className="edu-degree" style={{ margin: 0 }}>Data Science Intern</h3>
                <span style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: '500' }}>Nov 2025 - Apr 2026</span>
              </div>
              
              <p className="edu-school" style={{ marginTop: 0 }}>Shyara Tech Solution (OPC) Pvt. Ltd.</p>
              
              <ul className="edu-achievements">
                <li><FaStar className="bullet-icon" /> Completed a 6-month internship focused on Full-Stack Development and Data Science.</li>
                <li><FaStar className="bullet-icon" /> Engineered a financial dashboard with a WhatsApp expense-logging chatbot, custom charting, and predictive analytics.</li>
                <li><FaStar className="bullet-icon" /> Integrated a live Neon Postgres backend with Clerk for secure authentication.</li>
                <li><FaStar className="bullet-icon" /> Built the manager analytics dashboard for <strong>Bitex</strong>, a restaurant order management system.</li>
              </ul>

              <div className="edu-pills">
                <span>Data Science</span>
                <span>Machine Learning</span>
                <span>React</span>
                <span>Streamlit</span>
                <span>PostgreSQL</span>
                <span>Python</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;