"use client";
import { useEffect } from "react";

interface HeroProps {
    data: {
        name: string;
        subtitle: string;
        tagline: string;
        description: string;
    };
}

export default function Hero({ data }: HeroProps) {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll(".fade-in");
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero-bg-grid"></div>
            <div className="hero-content">
                <div className="hero-subtitle">{data.subtitle}</div>
                <h1 className="hero-title">{data.name}</h1>
                <p className="hero-tagline">{data.tagline}</p>
                <p className="hero-description">{data.description}</p>
                <div className="hero-cta">
                    <a href="#projects" className="btn btn-secondary">
                        View Projects
                    </a>
                    <a href="#contact" className="btn">
                        Get in Touch
                    </a>
                    <a href="#" className="btn">
                        Download Resume
                    </a>
                </div>
            </div>
            <div className="scroll-indicator">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
}
