import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { educationData } from "../../data/educationData";

import "./Education.css";

function Education() {
  const [selector, setSelector] = useState(1);
  const animation = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.8 });

  const transition = { type: "spring", duration: 1.2 };

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: transition,
      });
    }
  });

  useEffect(() => {
    const educations = [...document.querySelectorAll(".education__item")];
    for (let i = 0; i < educations.length; i++) {
      educations[i].classList.remove("active");
    }

    educations[selector].classList.add("active");
  }, [selector]);

  function selectEducation(id) {
    setSelector(id);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={animation}
      className="education"
      id="education"
    >
      <div className="title">Education</div>

      <div className="education__list">
        <div className="education__items">
          {educationData.map((education) => (
            <div
              className="education__item"
              key={education.id}
              onClick={() => selectEducation(education.id)}
            >
              {education.name}
            </div>
          ))}
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={transition}
          className="item-details"
          key={selector}
        >
          <span>{educationData[selector].department}</span>
          <span>{educationData[selector].date}</span>
          <span>{educationData[selector].place}</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Education;
