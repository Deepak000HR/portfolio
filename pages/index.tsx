import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import React, { useState } from "react";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden ">
      <NavMobile
        showNav={showNav}
        closeNav={closeNavHandler}
        scrollToSection={scrollToSection}
      />
      <Nav openNav={showNavHandler} scrollToSection={scrollToSection} />

      <Hero id="home" />
      <AboutMe id="about" />
      <Services id="services" />
      <Skills id="services" />
      {/* todo rename id for Skills*/}
    </div>
  );
};

export default HomePage;
