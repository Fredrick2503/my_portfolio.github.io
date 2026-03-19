import React from "react";

interface FooterData {
    description: string;
    socialLinks: { name: string; url: string; icon: string }[];
}

interface FooterProps {
    data: FooterData;
}

export default function Footer({ data }: FooterProps) {
    return (
        <footer>
            <div className="footer-content">
                <div>
                    <div className="footer-brand">Fredrick George F</div>
                    <p className="footer-description">{data.description}</p>
                    <div className="social-links" style={{ marginTop: "30px" }}>
                        {data.socialLinks.map((link, idx) => (
                            <a href={link.url} key={idx} className="social-link" title={link.name}>
                                <i className={link.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="footer-links">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#achievements">Achievements</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Resume (PDF)</a></li>
                        <li><a href="#">GitHub Projects</a></li>
                        <li><a href="#">LinkedIn Profile</a></li>
                        <li><a href="#">Portfolio Site</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                © 2024 Fredrick George F. All rights reserved.
            </div>
        </footer>
    );
}
