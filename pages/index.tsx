import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import React, { useEffect, useRef, useState } from "react";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = useRef<HTMLElement[]>([]);

  useEffect(() => {
    sections.current = [
      document.getElementById("home"),
      document.getElementById("about"),
      document.getElementById("services"),
      document.getElementById("skills"),
    ].filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: 0.6,
      }
    );

    sections.current.forEach((section) => observer.observe(section));

    return () => {
      sections.current.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="overflow-hidden ">
      <NavMobile
        showNav={showNav}
        closeNav={closeNavHandler}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
      <Nav
        openNav={showNavHandler}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      <Hero id="home" />
      <AboutMe id="about" />
      <Services id="services" />
      <Skills id="services" />
      {/* todo rename id for Skills*/}
    </div>
  );
};

export default HomePage;
