import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiC, SiCplusplus, SiPandas, SiNumpy, SiJavascript, SiScikitlearn, SiFirebase, SiHuggingface } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "Numpy", icon: <SiNumpy /> },
    { name: "Scikit-Learn", icon: <SiScikitlearn /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "HuggingFace", icon: <SiHuggingface /> },
  ];

  return (
    <div className="skills-container">
      <h2 className="section-title">Skills & Tech Stack</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-pill">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;