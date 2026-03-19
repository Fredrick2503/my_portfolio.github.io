import React from "react";

interface ProjectItem {
    date: string;
    title: string;
    type: string;
    typeIcon: string;
    description: string[];
    tech: string[];
}

interface ProjectsProps {
    data: ProjectItem[];
}

export default function Projects({ data }: ProjectsProps) {
    return (
        <section id="projects">
            <div className="section-header fade-in">
                <div className="section-label">Portfolio</div>
                <h2 className="section-title">Core Engineering Projects</h2>
                <p className="section-description">
                    Selected works showcasing enterprise architecture and full-stack development expertise
                </p>
            </div>
            <div className="projects-grid">
                {data.map((project, idx) => (
                    <div key={idx} className="project-card fade-in">
                        <div className="project-header">
                            <div className="project-date">{project.date}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-type">
                                <i className={project.typeIcon}></i>
                                {project.type}
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-description">
                                <ul>
                                    {project.description.map((desc, dIdx) => (
                                        <li key={dIdx}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="project-tech">
                                {project.tech.map((tech, tIdx) => (
                                    <span key={tIdx} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
