import React from 'react';
import { FaGraduationCap, FaSchool, FaStar } from 'react-icons/fa';

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="section-title">Education</h2>

      <div className="timeline">
        
        {/* ITEM 1: COLLEGE */}
        <div className="timeline-item">
          <div className="timeline-dot-container">
            <div className="timeline-dot">
              <FaGraduationCap />
            </div>
            <div className="timeline-line"></div>
          </div>
          
          <div className="timeline-content">
            <div className="edu-card">
              <h3 className="edu-degree">Bachelors in Computer Science and Engineering</h3>
              <p className="edu-school">Jaypee University of Engineering and Technology, Guna</p>
              
              <ul className="edu-achievements">
                <li><FaStar className="bullet-icon" /> 9.16 CGPA</li>
                <li><FaStar className="bullet-icon" /> Active Competitive Programmer with CodeChef Rating 1300*.</li>
                <li><FaStar className="bullet-icon" /> HACTRON2025 Hackathon Winner </li>
              </ul>

              <div className="edu-pills">
                <span>Data Structures & Algorithms</span>
                <span>Operating Systems</span>
                <span>DBMS</span>
                <span>Neural Networks</span>
                <span>Deep Learning</span>
                <span>Machine Learning</span>
              </div>
            </div>
          </div>
        </div>

        {/* ITEM 2: SCHOOL */}
        <div className="timeline-item">
          <div className="timeline-dot-container">
            <div className="timeline-dot school-dot">
              <FaSchool />
            </div>
            {/* No line below the last item */}
          </div>
          
          <div className="timeline-content">
            <div className="edu-card">
              <h3 className="edu-degree">Schooling</h3>
              <p className="edu-school">St. Aloysius Sr. Sec. School, Cantt, Sadar, Jabalpur</p>
              
              <ul className="edu-achievements">
                <li><FaStar className="bullet-icon" /> Distinction in Class 12th</li>
                <li><FaStar className="bullet-icon" /> 94.5% in Class 10th. </li>
              </ul>

              <div className="edu-pills">
                <span>Physics</span>
                <span>Chemistry</span>
                <span>Mathematics</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;