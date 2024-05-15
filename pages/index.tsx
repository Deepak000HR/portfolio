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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sections = useRef<HTMLElement[]>([]);

  useEffect(() => {
    sections.current = [
      document.getElementById("home"),
      document.getElementById("about"),
      document.getElementById("services"),
      document.getElementById("skills"),
      document.getElementById("blog"),
      document.getElementById("contact"),
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
      <Skills id="skills" />
      {/* todo rename id for Skills*/}
      <AboutMe id="blog" />
      <AboutMe id="contact" />
    </div>
  );
};

export default HomePage;

/////////////////////////////import AboutMe from "@/components/AboutMe";
// import Hero from "@/components/Hero";
// import Nav from "@/components/Nav";
// import NavMobile from "@/components/NavMobile";
// import Services from "@/components/Services";
// import Skills from "@/components/Skills";
// import sections from "@/constants/constant";
// import React, { useEffect, useRef, useState } from "react";

// const HomePage = () => {
//   const [showNav, setShowNav] = useState(false);
//   const showNavHandler = () => setShowNav(true);
//   const closeNavHandler = () => setShowNav(false);
//   const [activeSection, setActiveSection] = useState("home");
//   // const sections : string[] = ["home", "about", "services","skills", "blog", "contact"];

// // Define the type for the refs
// type SectionRefs = {
//   [key: string]: React.RefObject<HTMLElement>;
// };

// const sectionRefs = useRef<SectionRefs>(
//   sections.reduce((acc, section) => {
//     acc[section] = React.createRef<HTMLElement>();
//     return acc;
//   }, {} as SectionRefs)
// );

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setShowNav(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.6 }
//     );

//     sections.forEach(section => {
//       const currentSection = sectionRefs.current[section]?.current;
//       if (currentSection) {
//         observer.observe(currentSection);
//       }
//     });

//     return () => {
//       sections.forEach(section => {
//         const currentSection = sectionRefs.current[section]?.current;
//         if (currentSection) {
//           observer.unobserve(currentSection);
//         }
//       });
//     };
//   }, [sections]);
//   // const sections = useRef<HTMLElement[]>([]);

//   // useEffect(() => {
//   //   sections.current = [
//   //     document.getElementById("home"),
//   //     document.getElementById("about"),
//   //     document.getElementById("services"),
//   //     document.getElementById("skills"),
//   //     document.getElementById("blog"),
//   //     document.getElementById("contact"),
//   //   ].filter(Boolean) as HTMLElement[];
//   //   const observer = new IntersectionObserver(
//   //     (entries) => {
//   //       const visibleSection = entries.find((entry) => entry.isIntersecting);
//   //       if (visibleSection) {
//   //         setActiveSection(visibleSection.target.id);
//   //       }
//   //     },
//   //     {
//   //       threshold: 0.6,
//   //     }
//   //   );

//   //   sections.current.forEach((section) => observer.observe(section));

//   //   return () => {
//   //     sections.current.forEach((section) => observer.unobserve(section));
//   //   };
//   // }, []);

//   return (
//     <div className="overflow-hidden ">
//       <NavMobile
//         showNav={showNav}
//         closeNav={closeNavHandler}
//         scrollToSection={scrollToSection}
//         activeSection={activeSection}
//       />
//       <Nav
//         openNav={showNavHandler}
//         scrollToSection={scrollToSection}
//         activeSection={activeSection}
//       />

//       <Hero id="home" />
//       <AboutMe id="about" />
//       <Services id="services" />
//       <Skills id="skills" />
//       {/* dummy */}
//       <Skills id="blog" />
//       <Skills id="contact" />

//       {/* <div id="home" ref={sectionRefs.current.home}><Hero /></div>
//       <div id="about" ref={sectionRefs.current.about}><AboutMe /></div>
//       <div id="services" ref={sectionRefs.current.services}><Services /></div>
//       <div id="skills" ref={sectionRefs.current.skills}><Skills /></div>
//       <div id="blog" ref={sectionRefs.current.blog}><Skills /></div> */}

//       {/* todo rename id for Skills*/}
//     </div>
//   );
// };

// export default HomePage;
