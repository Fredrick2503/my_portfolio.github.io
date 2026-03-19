import React from "react";

interface AboutProps {
    data: {
        heading: string;
        paragraphs: string[];
        stats: { value: string; label: string }[];
        education: { degree: string; school: string; details: string }[];
    };
}

export default function About({ data }: AboutProps) {
    return (
        <section id="about">
            <div className="section-header fade-in">
                <div className="section-label">Who I Am</div>
                <h2 className="section-title">About Me</h2>
            </div>
            <div className="about-content fade-in">
                <div>
                    <h3>{data.heading}</h3>
                    {data.paragraphs.map((p, idx) => (
                        <p key={idx} dangerouslySetInnerHTML={{ __html: p }}></p>
                    ))}
                    <div className="about-stats">
                        {data.stats.map((stat, idx) => (
                            <div key={idx} className="stat">
                                <div className="stat-number">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="edu-list">
                        {data.education.map((edu, idx) => (
                            <div key={idx} className="edu-item">
                                <div className="edu-degree">{edu.degree}</div>
                                <div className="edu-school">{edu.school}</div>
                                <div className="edu-details">{edu.details}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
