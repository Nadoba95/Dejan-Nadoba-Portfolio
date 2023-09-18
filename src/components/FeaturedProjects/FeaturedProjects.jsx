import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import OtherProjects from "../OtherProjects/OtherProjects";
import "./FeaturedProjects.css";

function FeaturedProjects() {
  const [showMore, setShowMore] = useState(false);
  const [project1Ref, project1View] = useInView({ threshold: 0.5 });
  const [project2Ref, project2View] = useInView({ threshold: 0.5 });
  const [project3Ref, project3View] = useInView({ threshold: 0.5 });
  const project1Animation = useAnimation();
  const project2Animation = useAnimation();
  const project3Animation = useAnimation();

  const transition = { type: "spring", duration: 2.5, bounce: 0.5 };

  useEffect(() => {
    if (project1View) {
      animate(project1Animation);
    }
  }, [project1View, project1Animation]);

  useEffect(() => {
    if (project2View) {
      animate(project2Animation);
    }
  }, [project2View, project2Animation]);

  useEffect(() => {
    if (project3View) {
      animate(project3Animation);
    }
  }, [project3View, project3Animation]);

  function animate(animation) {
    animation.start({
      opacity: 1,
      transition: transition,
    });
  }

  function showMoreHandler() {
    setShowMore(true);
  }

  return (
    <div className="projects" id="projects">
      <div className="title">My Projects</div>

      <div className="featured-projects">
        <motion.div ref={project1Ref} initial={{ opacity: 0 }} animate={project1Animation} className="project">
          <a href="https://audiophile-e-comerce-dejan-nadoba.netlify.app/" target="_blank" rel="noreferrer">
            <div className="project-img1 img"></div>
          </a>
          <span className="project-details1 details">
            <span>Featured Project</span>
            <span className="project__name">Audiophile e-commerce</span>
            <div className="project__desc">
              Built e-commerce website, improved my skills in react and typescript. Technologies used react, scss, redux...
            </div>
            <ul className="project__tech-list">
              <li>React</li>
              <li>Redux</li>
              <li>TypeScript</li>
              <li>React-Router</li>
            </ul>
            <div className="project__links">
              <a href="https://github.com/Nadoba95/Audiophile-E-Commerce-Website" target="_blank" title="Github" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://audiophile-e-comerce-dejan-nadoba.netlify.app/" target="_blank" title="External link" rel="noreferrer">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </span>
        </motion.div>

        <motion.div ref={project2Ref} initial={{ opacity: 0 }} animate={project2Animation} className="project">
          <span className="project-details2 details">
            <span>Featured Project</span>
            <span className="project__name">REST Countries API</span>
            <div className="project__desc">
              This is my first REST project and i learned a lot about react building it. Used react custom hooks, react router for
              pagination, useContext, etc.
            </div>
            <ul className="project__tech-list">
              <li>React</li>
              <li>React-Router</li>
              <li>API</li>
            </ul>
            <div className="project__links">
              <a href="https://github.com/Nadoba95/REST-Countries-API" target="_blank" title="Github" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://rest-countries-api-nadoba95.netlify.app" target="_blank" title="External link" rel="noreferrer">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </span>
          <a href="https://rest-countries-api-nadoba95.netlify.app" target="_blank" rel="noreferrer">
            <div className="project-img2 img"></div>
          </a>
        </motion.div>

        <motion.div ref={project3Ref} initial={{ opacity: 0 }} animate={project3Animation} className="project">
          <a href="https://workent-dejan-nadoba.netlify.app/" target="_blank" rel="noreferrer">
            <div className="project-img3 img"></div>
          </a>
          <span className="project-details3 details">
            <span>Featured Project</span>
            <span className="project__name">Workent Website</span>
            <div className="project__desc">Exported Figma design to code, full responsive multi-page website.</div>
            <ul className="project__tech-list">
              <li>HTML</li>
              <li>SCSS</li>
              <li>BEM</li>
              <li>JavaScript</li>
            </ul>
            <div className="project__links">
              <a href="https://github.com/Nadoba95/Workent" target="_blank" title="Github" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://workent-dejan-nadoba.netlify.app/" target="_blank" title="External link" rel="noreferrer">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </span>
        </motion.div>
      </div>

      {!showMore && (
        <div className="show-hide" onClick={showMoreHandler}>
          Show More
        </div>
      )}
      {showMore && <OtherProjects showMore={showMore} setShowMore={setShowMore} />}
    </div>
  );
}

export default FeaturedProjects;
