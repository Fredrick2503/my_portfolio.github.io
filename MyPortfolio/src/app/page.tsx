import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

import portfolioData from "@/data/portfolio.json";

export default function Home() {
    return (
        <>
            <Loader />
            <Navbar />
            <Hero data={portfolioData.personalInfo} />
            <About data={portfolioData.about} />
            <Skills data={portfolioData.skillsCategories} />
            <Projects data={portfolioData.projects} />
            <Achievements data={portfolioData.achievements} />
            {/* <Contact
                email={portfolioData.personalInfo.email}
                phone={portfolioData.personalInfo.phone}
                location={portfolioData.personalInfo.location}
            /> */}
            <Footer data={portfolioData.footer} />
            <BackToTop />
        </>
    );
}
