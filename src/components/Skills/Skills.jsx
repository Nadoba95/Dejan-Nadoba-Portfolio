import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { skillsData } from "../../data/skillsData";

import "./Skills.css";

function Skills() {
  const animation = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  const transition = { type: "spring", duration: 1 };

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: transition,
      });
    }
  });

  return (
    <div className="skills" id="skills">
      <div className="title">Skills</div>
      <div ref={ref}>
        {skillsData.map((skill) => {
          return (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={animation}
              key={skill.name}
              className="skill-item"
            >
              {skill.image}
              <div>{skill.name}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
