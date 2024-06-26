import sections from "@/constants/constant";
import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  showNav: boolean;
  closeNav: () => void;
  scrollToSection: (id: string) => void;
  activeSection: string;
}

const NavMobile = ({
  closeNav,
  showNav,
  scrollToSection,
  activeSection,
}: Props) => {
 
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  const handleClick = (id: string) => {
    closeNav();

    scrollToSection(id); // Delay to ensure the nav is closed before scrolling
  };

  // dummy

  // const [navSticky, setNavSticky] = useState(false);
  // useEffect(() => {
  //   const handler = () => {
  //     if (window.scrollY >= 90) {
  //       setNavSticky(true);
  //     }
  //     if (window.scrollY <= 90) {
  //       setNavSticky(false); //
  //     }
  //   };
  //   window.addEventListener("scroll", handler);
  // }, []);

  // dummy

  return (
    <div>
      <div
        className={`fixed top-0 ${navOpenStyle} transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}
      ></div>
      <ul
        className={`text-white ${navOpenStyle} fixed flex items-center flex-col justify-center h-[100%] transform transition-all duration-300 delay-300 w-[60%] bg-red-600 space-y-14 z-[10006]`}
      >
        {/* comment */}
        {/* <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            onClick={() => {
              closeNav();
              scrollToSection("home");
            }}
            // href="#"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            onClick={() => {
              closeNav();
              scrollToSection("about");
            }}
            // href="#"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            onClick={() => {
              closeNav();
              scrollToSection("services");
            }}
            // href="#"
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            onClick={() => {
              closeNav();
              scrollToSection("blog");
            }}
            // href="#"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            className="nav__link text-[25px] sm:text-[30px]"
            onClick={() => {
              closeNav();
              scrollToSection("contact");
            }}
            // href="#"
          >
            Contact
          </a>
        </li> */}
        {/* comment */}

        {/* {["home", "about", "services", "blog", "contact"].map((section) => (
          <li key={section}>
            <a
              className={`nav__link text-[25px] sm:text-[30px] ${
                activeSection === section ? "after:scale-x-100" : ""
              }`}
              onClick={() => {
                closeNav();
                scrollToSection(section);
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))} */}

        {sections.map((section) => (
          <li key={section}>
            <a
              className={`nav__link  ${
                activeSection === section ? "after:scale-x-100" : ""
              } text-[25px] sm:text-[30px] `}
              onClick={() => handleClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
        <XMarkIcon
          onClick={closeNav}
          tabIndex={0}
          className="absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white x-icon"
        />
      </ul>
    </div>
  );
};

export default NavMobile;
