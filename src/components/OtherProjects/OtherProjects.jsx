import { otherProjectsData } from "../../data/otherProjectsData";

import "./OtherProjects.css";

function OtherProjects({ showMore, setShowMore }) {
  function showLessHandler() {
    setShowMore(false);
  }

  return (
    <>
      {showMore && (
        <>
          <div className="other-projects">
            {otherProjectsData.map((project, i) => (
              <div key={i} className="other-project">
                <div className="other-project__card">
                  <div>
                    <div className="project__name">{project.name}</div>
                    <div className="project__links">
                      <a
                        href={project.github}
                        target="_blank"
                        title="Github"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                      <a
                        href={project.liveSite}
                        target="_blank"
                        title="External link"
                        rel="noreferrer"
                      >
                        <i className="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                  <div className="project__desc">{project.description}</div>
                  <ul className="project__tech-list">
                    {project.techs.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
                {project.image}
              </div>
            ))}
          </div>

          <div className="show-hide" onClick={showLessHandler}>
            Show Less
          </div>
        </>
      )}
    </>
  );
}

export default OtherProjects;
