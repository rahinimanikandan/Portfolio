import React from 'react';
import "./services.css";

function Services() {
    return (
        <div className="services-page-wrapper">
            <div className="services-head">
                <h1>My Technical Services</h1>
            </div>
            
            <p className="services-intro">
                As a Full Stack Developer, I specialize in architecting scalable backend systems alongside modular, highly interactive user interfaces. By bridging structured Object-Oriented Programming with modern UI frameworks, I deliver performant, fully responsive digital products. From secure database management to real-time system monitoring solutions, I build software engineered for efficiency, data persistence, and clean code management.
            </p>
            
            <div className="services-grid">
                <div className="service-card">
                    <div className="card-icon">⚡</div>
                    <h2>Backend Development</h2>
                    <p>Building secure, scalable enterprise architectures using <strong>C#, ASP.NET Core, and the .NET Framework</strong>. Expert in implementing robust web APIs, CRUD microservices, and efficient business logic layer integrations.</p>
                </div>
                
                <div className="service-card">
                    <div className="card-icon">⚛️</div>
                    <h2>Frontend Architecture</h2>
                    <p>Engineering responsive web dashboards with <strong>ReactJS, AngularJS, JavaScript, and Bootstrap</strong>. Specialized in state isolation hooks, local data persistence APIs, dynamic filtering, and interactive asynchronous interfaces.</p>
                </div>
                
                <div className="service-card">
                    <div className="card-icon">🗄️</div>
                    <h2>Database & ORM Systems</h2>
                    <p>Designing structured relational database systems using <strong>SQL and MySQL Server</strong>. Seamlessly mapping object models to database tables utilizing <strong>Entity Framework Core</strong> for optimized data access layers.</p>
                </div>

                <div className="service-card">
                    <div className="card-icon">🖥️</div>
                    <h2>System & Resource Monitoring</h2>
                    <p>Developing low-level OS utilities capable of silent installation, secure administrative modules, background resource tracking (RAM, disk, network usage), and automated event-driven alerts.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;