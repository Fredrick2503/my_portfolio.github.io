"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);

            const sections = document.querySelectorAll("section");
            let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute("id") || "";
                }
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "achievements", label: "Achievements" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav id="navbar" className={scrolled ? "scrolled" : ""}>
            <div className="logo">FGF</div>
            <div
                className={`hamburger ${menuActive ? "active" : ""}`}
                id="hamburger"
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`nav-menu ${menuActive ? "active" : ""}`} id="navMenu">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                            onClick={closeMenu}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
