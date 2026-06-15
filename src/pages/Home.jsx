import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";
import Profile from "../assets/rahini.png";
import cvFile from "../assets/Rahini_Resume.pdf";

function Home() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = 'Rahini_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="home-page-container">
            <div className="home-hero-content">
                <div className="home-text-side">
                    <div className="typing-header-wrapper">
                        <h1>Full Stack Developer</h1>
                    </div>
                    
                    <div className="home-intro-paragraph">
                        <p>
                            Hi, I'm Rahini — a passionate <span className="highlight-blue">Software Developer</span> specializing 
                            in building scalable .NET Core backend systems and modular, responsive React web architectures.
                        </p>

                        <div className='home-cta'>
                            <Link to="/about" className="home-cta-btn">
                                More info
                            </Link>
                            <button className="home-cta-btn" onClick={handleDownload}>
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>

                <div className="home-image-side">
                    <div className="profile-img-frame">
                        <img src={Profile} alt="Rahini - Profile" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;