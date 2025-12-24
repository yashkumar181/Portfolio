import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // PROJECT DATA (Based on your screenshots)
  const projects = [
    {
      id: 1,
      title: "Sam₹iddhi",
      date: "October 2025",
      image: "/samriddhi.png", // You will add this image later
      tech: ["Python","FastAPI", "HuggingFace","Pandas","Numpy","SciketLearn"],
      shortDesc: "Beneficiary Credit Scoring with Income Verification for Direct Digital Lending",
      fullDesc: "Our platform is built on a sophisticated, dual-model AI engine that provides a holistic view of a beneficiary's financial profile for accurate risk assessment. A real-time tool showing how future financial actions will impact a user's Credit score.",
      github: "https://github.com/yashkumar181/Samriddhi-Credit_Scoring_Automation",
      live: "https://thecredsite.streamlit.app/"
    },
    {
      id: 2,
      title: "मनova",
      date: "Sep 2025 - Oct 2025",
      image: "/manova.png",
      tech: ["TypeScript", "React.js", "Firebase","CSS", "JavaScript", "Groq", "Zoom"],
      shortDesc: "A platform for psychological support for students in higher education",
      fullDesc: "मनova is a platform tackles the critical need for structured, accessible, and stigma-free mental health services by offering a centralized hub for students and administrators alike.",
      github: "https://github.com/yashkumar181/Maanova",
      live: "https://maanova.vercel.app/"
    },
    {
      id: 3,
      title: "HealthVision",
      date: "April 2024",
      image: "/healthvision.png",
      tech: ["Gemini", "JavaScript", "Tesseract.js", "HTML","CSS","Leaflet.js ","EmailJS"],
      shortDesc: "HealthVision: AI-driven web platform that offers a comprehensive healthcare assistant.",
      fullDesc: "An AI-driven web based healthcare assistant. From symptom checking to appointment booking, and medical image diagnosis to finding nearby hospitals — HealthVision is designed to be your smart healthcare companion.",
      github: "https://github.com/yashkumar181/HealthVision",
      live: "https://health-vision-delta.vercel.app/"
    },
    {
      id: 4,
      title: "My Portfolio",
      date: "Dec 2025",
      image: "/portfolio.png",
      tech: ["React", "CSS", "JavaScript"],
      shortDesc: "My Portfolio Website",
      fullDesc: "My Portfolio Website",
      github: "https://github.com",
      live: "https://your-demo-link.com"
    },
    {
      id: 5,
      title: "Replify",
      date: "April 2025",
      image: "/replify.png",
      tech: ["HTML", "CSS", "JavaScript"],
      shortDesc: "Gemini based automated Email Response Generator.",
      fullDesc: "Gemini based automated Email Response Generator. Select the response tone and Mail from the platform itself.",
      github: "https://github.com/yashkumar181/Auto-Response-Generator",
      live: "https://yashkumar181.github.io/Auto-Response-Generator/"
    },

  ];

  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      
      {/* PROJECTS GRID */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
            <div className="card-image-wrapper">
              <img src={project.image} alt={project.title} className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <div className="card-tech-row">
                {project.tech.slice(0, 3).map((t, i) => (
                  <span key={i} className="tech-pill-small">{t}</span>
                ))}
              </div>
              <p className="card-desc">{project.shortDesc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL POPUP (Shows when a project is clicked) */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button className="close-btn" onClick={() => setSelectedProject(null)}>
              <FaTimes />
            </button>

            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            
            <div className="modal-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <span className="modal-date">{selectedProject.date}</span>
            </div>

            <div className="modal-tech-row">
              {selectedProject.tech.map((t, i) => (
                <span key={i} className="tech-pill-modal">{t}</span>
              ))}
            </div>

            <p className="modal-desc">{selectedProject.fullDesc}</p>

            <div className="modal-actions">
              <a href={selectedProject.github} target="_blank" className="action-btn github-btn">
                <FaGithub /> View Code
              </a>
              <a href={selectedProject.live} target="_blank" className="action-btn live-btn">
                <FaExternalLinkAlt /> View Live
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Projects;