import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import "./MyProjects.css";

function MyProjects() {
  const [ref1, inView1] = useInView({ threshold: 0.8 });
  const [ref2, inView2] = useInView({ threshold: 0.8 });
  const [ref3, inView3] = useInView({ threshold: 0.8 });
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  const transition = { type: "spring", duration: 2.5, bounce: 0.5 };

  useEffect(() => {
    if (inView1) {
      animate(animation1);
    }
  });

  useEffect(() => {
    if (inView2) {
      animate(animation2);
    }
  });

  useEffect(() => {
    if (inView3) {
      animate(animation3);
    }
  });

  function animate(animation) {
    animation.start({
      x: 0,
      opacity: 1,
      transition: transition,
    });
  }

  return (
    <div className="projects" id="projects">
      <span>My project's</span>

      <div className="featured-projects">
        <motion.div
          ref={ref1}
          initial={{ x: 200, opacity: 0 }}
          animate={animation1}
          className="project"
        >
          <a
            href="https://rest-countries-api-nadoba95.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-img1 img"></div>
          </a>
          <span className="project-details1 details">
            <span>Featured Project</span>
            <span>REST Countries API</span>
            <div>
              This is my first REST project and i learned a lot about react
              building it. Used react custom hooks, react router for pagination,
              useContext, etc.
            </div>
            <ul>
              <li>React</li>
              <li>React-Router</li>
              <li>API</li>
            </ul>
            <div className="project__links">
              <a
                href="https://github.com/Nadoba95/REST-Countries-API"
                target="_blank"
                title="Github"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://rest-countries-api-nadoba95.netlify.app"
                target="_blank"
                title="External link"
                rel="noreferrer"
              >
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </span>
        </motion.div>

        <motion.div
          ref={ref2}
          initial={{ x: -200, opacity: 0 }}
          animate={animation2}
          className="project"
        >
          <span className="project-details2 details">
            <span>Featured Project</span>
            <span>Tic Tac Toe Game</span>
            <div>
              Built a tic tac toe game where people can play against each other
              or against CPU. Used html, css and JavaScript.
            </div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div className="project__links">
              <a
                href="https://github.com/Nadoba95/Tic-tac-toe-game"
                target="_blank"
                title="Github"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://nadoba95.github.io/Tic-tac-toe-game/"
                target="_blank"
                title="External link"
                rel="noreferrer"
              >
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </span>
          <a
            href="https://nadoba95.github.io/Tic-tac-toe-game/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-img2 img"></div>
          </a>
        </motion.div>

        <motion.div
          ref={ref3}
          initial={{ x: 200, opacity: 0 }}
          animate={animation3}
          className="project"
        >
          <a
            href="https://fit-club-website-nadoba95.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-img3 img"></div>
          </a>
          <span className="project-details3 details">
            <span>Featured Project</span>
            <span>Fit Club Website</span>
            <div>
              On this project i used first time framer motion for animations in
              react. This project was for me practicing all round (react, css,
              js, animations).
            </div>
            <ul>
              <li>React</li>
              <li>Framer-Motion</li>
            </ul>
            <div className="project__links">
              <a
                href="https://github.com/Nadoba95/Fit-Club-Website"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://fit-club-website-nadoba95.netlify.app/"
                target="_blank"
                title="External link"
                rel="noreferrer"
              >
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default MyProjects;
