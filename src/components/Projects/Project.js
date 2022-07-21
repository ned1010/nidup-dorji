import React from "react";
import "./Projects.css";
import { projectItems } from "../data/ProjectItems";
const Projects = () => {
  return (
    <div className="container" id="Projects">
      <h1 className="title">Projects</h1>
      <div className="projects">
        <div className="project-list">
          {projectItems.map((itemlist, index) => {
            return (
              <div className="project-item" key={index}>
                <div>
                  <div className="image-overlay">
                    <a
                      rel="noopener noreferrer"
                      href={itemlist.link}
                      target="_blank"
                    >
                      <img
                        src={require("../../assets/images/projects/project" +
                          itemlist.img +
                          ".jpg")}
                        alt="project-img"
                        className="project-img"
                      />
                    </a>
                  </div>
                  <div className="project-description">
                    <h6 className="description-title">{itemlist.title}</h6>

                    <a
                      rel="noopener noreferrer"
                      href={itemlist.link}
                      target="_blank"
                      className="project-btn"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
