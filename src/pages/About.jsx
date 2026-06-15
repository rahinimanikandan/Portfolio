import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Braces, Database, Layout, Terminal, Blocks } from 'lucide-react';
import "./about.css";

function About() {
     const skills = [
        { icon: <Terminal size={32} />, name: 'C#', color: '#178600' },
        { icon: <Code2 size={32} />, name: '.NET Core', color: '#512bd4' },
        { icon: <Blocks size={32} />, name: 'Entity Framework', color: '#68217a' },
        { icon: <Database size={32} />, name: 'SQL / MySQL', color: '#00758f' },
        { icon: <Braces size={32} />, name: 'ReactJS / JS', color: '#61dafb' },
        { icon: <Layout size={32} />, name: 'HTML & CSS / Bootstrap', color: '#e34c26' }
    ];

    return (
        <div className="about-page-wrapper">
            <div className="about-story-section">
                <h1>Short story about me</h1>
                <p>
                    I am an aspiring Full Stack Developer passionate about crafting highly scalable enterprise backend infrastructures paired with seamless, responsive user interfaces. My software engineering journey is centered around object-oriented architecture and modular frontend state management. I love transforming complex application workflows into clean, interactive, and well-documented code.
                </p>
            </div>

            <div className="about-skills-section">
                <h2>My Skills & Stack</h2>
                <p className="skills-subtitle">The tools, languages, and frameworks I use to bring architectures to life:</p>
                
                <div className="skills-badge-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-badge-card" style={{ '--accent-color': skill.color }}>
                            <div className="skill-badge-icon">
                                {skill.icon}
                            </div>
                            <span className="skill-badge-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <button className="cta-projects-btn">
                <Link to="/projects">About my projects</Link>
            </button>
        </div>
    );
}

export default About;