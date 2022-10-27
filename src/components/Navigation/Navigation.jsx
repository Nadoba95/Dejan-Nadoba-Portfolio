import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import CV from "../../assets/pdf/Dejan Nadoba CV.pdf";

import "./Navigation.css";

function Navigation({ aboutInView }) {
  const [navClasses, setNavClasses] = useState("navigation");
  const [navIsOpen, setNavIsOpen] = useState(false);

  const transition = { type: "spring", duration: 1 };
  const tablet = window.innerWidth <= 768;
  const mobile = window.innerWidth <= 575;

  useEffect(() => {
    if (aboutInView) {
      setNavClasses("navigation");
    } else {
      setNavClasses("navigation fixed");
    }
  }, [aboutInView]);

  function openNavbar() {
    setNavIsOpen(true);
  }

  function closeNavbar() {
    setNavIsOpen(false);
  }

  const resumeLink = (
    <a
      className="resume-link"
      href={CV}
      download="Dejan Nadoba CV"
      onClick={closeNavbar}
    >
      Resume
    </a>
  );

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transition}
      className={navClasses}
    >
      <span>
        <a href=".">DN</a>
      </span>
      {mobile && resumeLink}
      {tablet && !navIsOpen ? (
        <i className="fa-solid fa-bars" onClick={openNavbar}></i>
      ) : (
        <>
          {tablet && <i className="fa-solid fa-bars" onClick={closeNavbar}></i>}
          <ul className="list">
            <li>
              <a href="#about" onClick={closeNavbar}>
                About
              </a>
            </li>
            <li>
              <a href="#education" onClick={closeNavbar}>
                Education
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeNavbar}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeNavbar}>
                Project
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeNavbar}>
                Contact
              </a>
            </li>
            {!mobile && resumeLink}
          </ul>
        </>
      )}
    </motion.nav>
  );
}

export default Navigation;
