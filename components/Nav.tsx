import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";

interface Props {
  openNav: () => void;
  scrollToSection: (id: string) => void;
  activeSection: string;
}

const Nav = ({ openNav, scrollToSection ,activeSection}: Props) => {
  const [navSticky, setNavSticky] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      }
      if (window.scrollY <= 90) {
        setNavSticky(false); //
      }
    };
    window.addEventListener("scroll", handler);
  }, []);
  const stickyStyle = navSticky ? "bg-[#212428] shadow-gray-900 shadow-sm" : "";
  return (
    <div className={`fixed w-[100%] ${stickyStyle} transition-all duration-300 z-[1000]`}>
      <div className="flex items-center h-[12vh] justify-between w-[80%] mx-auto">
        <div className="font-logo text-white text-[18px]">
          <span className="text-[30px] md:text-[40px] text-yellow-400">D</span>
          EEPAK
        </div>
        <ul className="md:flex hidden items-center space-x-10">
          {/* <li>
            <a className="nav__link"  onClick={() => scrollToSection("home")} >
              Home
            </a>
          </li>
          <li>
            <a className="nav__link" onClick={() => scrollToSection("about")} >
              About
            </a>
          </li>
          <li>
            <a className="nav__link" onClick={() => scrollToSection("services")} >
              Services
            </a>
          </li>
          <li>
            <a className="nav__link" onClick={() => scrollToSection("blog")} >
              Blog
            </a>
          </li>
          <li>
            <a className="nav__link" onClick={() => scrollToSection("contact")} >
              Contact
            </a>
          </li> */}
             {["home", "about", "services", "blog", "contact"].map((section) => (
            <li key={section}>
              <a
                className={`nav__link ${activeSection === section ? "after:scale-x-100" : ""}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <Bars3BottomLeftIcon
          onClick={openNav}
          className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180"
        />
      </div>
    </div>
  );
};

export default Nav;
