import { motion } from "framer-motion";

import "./Navigation.css";

function Navigation() {
  const transition = { type: "spring", duration: 1 };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transition}
      className="navigation"
    >
      <span>
        <a href="">DN</a>
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
        <button>Resume</button>
      </ul>
    </motion.nav>
  );
}

export default Navigation;