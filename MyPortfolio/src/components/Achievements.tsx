import React from "react";

interface AchievementItem {
    title: string;
    description: string;
    org?: string;
    icon: string;
}

interface AchievementsProps {
    data: AchievementItem[];
}

export default function Achievements({ data }: AchievementsProps) {
    return (
        <section id="achievements" style={{ background: "var(--bg-secondary)" }}>
            <div className="section-header fade-in">
                <div className="section-label">Recognition</div>
                <h2 className="section-title">Achievements & Certifications</h2>
            </div>
            <div className="achievements-grid">
                {data.map((item, idx) => (
                    <div key={idx} className="achievement-card fade-in">
                        <div className="achievement-icon">
                            <i className={item.icon}></i>
                        </div>
                        <div className="achievement-title">{item.title}</div>
                        <div className="achievement-description">{item.description}</div>
                        {item.org && <div className="achievement-org">{item.org}</div>}
                    </div>
                ))}
            </div>
        </section>
    );
}
