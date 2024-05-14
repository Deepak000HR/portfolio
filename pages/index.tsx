import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import React, { useState } from "react";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div className="overflow-hidden ">
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler} />

      <Hero />
      <AboutMe />
      {/* Services */}
    </div>
  );
};

export default HomePage;
