import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { educationData } from "../../data/educationData";

import "./Education.css";

function Education() {
  const [selector, setSelector] = useState(1);
  const [ref, inView] = useInView({ threshold: 0.8 });
  const animation = useAnimation();

  const transition = { type: "spring", duration: 1.2 };
  const mobile = window.innerWidth <= 575;

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

  const educationListClasses =
    window.innerWidth <= "768px"
      ? "education__list scrollbar"
      : "education__list";

  return (
    <motion.div
      ref={ref}
      initial={mobile ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
      animate={animation}
      className="education"
      id="education"
    >
      <div className="title">Education</div>

      <div className={educationListClasses}>
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
          initial={mobile ? { x: 0, opacity: 0 } : { x: -100, opacity: 0 }}
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
