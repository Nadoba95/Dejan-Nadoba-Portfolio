import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import CV from "../../assets/pdf/Dejan Nadoba CV.pdf";

import "./Navigation.css";

function Navigation({ aboutInView }) {
  const [navClasses, setNavClasses] = useState("navigation");
  const transition = { type: "spring", duration: 1 };

  useEffect(() => {
    if (aboutInView) {
      setNavClasses("navigation");
    } else {
      setNavClasses("navigation fixed");
    }
  }, [aboutInView]);

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
      <ul className="list">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <a className="resume-link" href={CV} download="Dejan Nadoba CV">
          Resume
        </a>
      </ul>
    </motion.nav>
  );
}

export default Navigation;
