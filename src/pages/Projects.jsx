import React from 'react';
import "./project.css";

function Projects() {
    const projectsList = [
        {
            title: "Task Management Dashboard",
            shortNote: "A dynamic frontend task management workspace built with React, leveraging client-side lifecycle handling and local browser state isolation.",
            desc: "Architected a responsive, decoupled web dashboard utilizing structural functional components and advanced React hook states. Designed a multi-tier sorting grid enabling micro-interactions, input boundary schemas, and state persistence tailored for efficient workflow management.",
            principles: [
                "Architected dynamic modular frontend flows using isolated functional components and hook states (useState, useEffect).",
                "Implemented zero-backend local data persistence utilizing browser localStorage APIs for session state preservation across refreshes.",
                "Engineered multi-tier analytical client sorting enabling real-time string matching and progress priority filter structures.",
                "Developed structural modal overlay configurations backed by input validation forms for unified error boundary control."
            ],
            functions: [
                "initializeTaskWorkspace() → Hydrates structural data arrays directly from browser client states upon execution lifecycle.",
                "commitTaskChange(payload) → Processes mutable input forms, runs state transformations, and mirrors configurations to client memory.",
                "filterWorkspaceGrid(criteria) → Evaluates complex task priority arrays and status parameters via string filter schemas.",
                "toggleModalOverlay(viewState) → Controls structural workflow presentation and clears active error indicators safely."
            ]
        },
        {
            title: "Employee Monitoring & Management System",
            shortNote: "An advanced multi-component enterprise tracking system built to collect system diagnostic metrics and securely manage backend data records.",
            desc: "Engineered a robust multi-module utility workspace using C# and .NET architectures integrated with a relational MySQL database server layer. Features background background tracking metrics, event-driven hardware logging pipelines, automated administrative notification channels, and high-security installation configurations.",
            principles: [
                "Developed a modular system across targeted utility builds containing dedicated Admin, Live Monitor, Network, and Update modules.",
                "Captured active hardware utilization statistics compiling live metrics for RAM, Disk, and Network traffic logs.",
                "Implemented secure keypress listeners, automated screen capture queues, and event-driven email exception indicators.",
                "Supported specialized client features including silent terminal operations, secure uninstallation walls, and auto-updating version binaries."
            ],
            functions: [
                "CaptureSystemMetrics() → Polls live operational hardware performance indices and indexes data limits into active memory arrays.",
                "SyncMetricsToRemoteStore() → Establishes secure network links to parse structured tracking points into a relational MySQL database.",
                "DispatchSecurityAlert() → Formulates automated administrative email notifications containing contextual event flags.",
                "VerifyAccessCredentials() → Checks admin security clear arrays before allowing configuration resets or uninstallation steps."
            ]
        },
        {
            title: "Weather Integration Application",
            shortNote: "An asynchronous web-based environment compiling geographic meteorological insights through real-time API client pipelines.",
            desc: "Designed an interactive, non-blocking single-page interface leveraging vanilla JavaScript runtime methods. Connects with external weather endpoints to parse complex situational environmental data structures while managing DOM element state adjustments smoothly without forcing web views to reload completely.",
            principles: [
                "Captures and validates variable string coordinates from user inputs to format asynchronous HTTP fetch client calls.",
                "Integrates with external third-party endpoints (OpenWeatherMap API) to query contextual geographical parameters.",
                "Transforms structured data returns into digestible metrics, managing application states cleanly without site-wide reloads.",
                "Employs fallback routing catch systems to handle empty responses, invalid target locations, or infrastructure communication breaks."
            ],
            functions: [
                "fetchWeatherData(cityName) → Coordinates asynchronous pipelines to query contextual location attributes from external servers.",
                "displayWeather(dataset) → Unpacks nested objects from data responses and processes DOM updates for localized metric text views.",
                "handleErrors(errorInstance) → Captures processing breakdown triggers and logs clean operational fallback messages to UI layouts.",
                "convertTemperature(kelvinUnits) → Computes operational variable equations mapping values between standard measurement scales."
            ]
        }
    ];

    return (
        <div className="projects-page-wrapper">
            <div className="projects-section-header">
                <h1>About My Projects</h1>
                <p className="projects-subtitle">A showcase of full-stack engineering implementations, architectures, and systems:</p>
            </div>
            
            <div className="projects-cards-container">
                {projectsList.map((proj, i) => (
                    <div key={i} className="project-display-card">
                        <div className="project-card-header">
                            <h2>{proj.title}</h2>
                        </div>
                        
                        <div className="project-card-body">
                            <div className="info-block">
                                <h3>Short Summary</h3>
                                <p>{proj.shortNote}</p>
                            </div>
                            
                            <div className="info-block">
                                <h3>Technical Description</h3>
                                <p>{proj.desc}</p>
                            </div>
                            
                            <div className="info-block">
                                <h3>Core Engineering Principles</h3>
                                <ol className="project-metrics-list">
                                    {proj.principles.map((p, idx) => (
                                        <li key={idx}>{p}</li>
                                    ))}
                                </ol>
                            </div>
                            
                            <div className="info-block">
                                <h3>System Operations & Methods</h3>
                                <ol className="project-methods-list">
                                    {proj.functions.map((f, idx) => (
                                        <li key={idx}>
                                            <code>{f.split(' → ')[0]}</code>
                                            <span> → {f.split(' → ')[1]}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;