import React from "react";

interface SkillItem {
    name: string;
    icon: string;
}

interface SkillCategory {
    title: string;
    items: SkillItem[];
}

interface SkillsProps {
    data: SkillCategory[];
}

export default function Skills({ data }: SkillsProps) {
    return (
        <section id="skills" style={{ background: "var(--bg-secondary)" }}>
            <div className="section-header fade-in">
                <div className="section-label">Expertise</div>
                <h2 className="section-title">Technical Skills</h2>
                <p className="section-description">
                    A comprehensive toolkit for building enterprise-grade backend systems and data-driven applications
                </p>
            </div>
            <div className="skills-container">
                {data.map((category, idx) => (
                    <div key={idx} className="skills-category fade-in">
                        <h3 className="skills-category-title">{category.title}</h3>
                        <div className="skills-grid">
                            {category.items.map((skill, sIdx) => (
                                <div key={sIdx} className="skill-card">
                                    <i className={`${skill.icon} skill-icon`}></i>
                                    <div className="skill-name">{skill.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
