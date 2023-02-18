import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navigation from "../Navigation/Navigation";

import "./About.css";

function About() {
  const [aboutRef, aboutInView] = useInView();

  const transition = { type: "spring", duration: 1, delay: 0.5 };

  return (
    <>
      <Navigation aboutInView={aboutInView} />
      <div ref={aboutRef} className="about" id="about">
        <div className="about__left">
          <span>Hi, my name is</span>
          <span>Dejan Nadoba</span>
          <span>I build things for the web.</span>
          <span>
            I'm passionate <span>Front-End Developer</span>. I love to design
            and develop responsive websites. I desire to become a good web
            developer and also enjoy learning new stuff every day.
          </span>
        </div>
        <div className="about__right">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={transition}
          >
            <div className="face-image"></div>
            <div></div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;
