import React from "react";
import "./Skills.css";

import { BsCheckCircleFill } from "react-icons/bs";

import { programmingSkills, generalSkills } from "../data/skillItems";
import Slide from "react-reveal/Slide";

const Skills = () => {
  return (
    <div className="container" id="Skills">
      <h1 className="title">Skills</h1>
      <div className="skills">
        <Slide left>
          <div className="skills-item">
            <h3 className="title">Front End</h3>
            {programmingSkills.map((item, index) => {
              return (
                <div className="front-item">
                  <BsCheckCircleFill className="skill-icon" />
                  <div className="skills-info">
                    <h4 class="skills-name">{item.name}</h4>
                    <span class="skills-level">{item.level}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Slide>

        <Slide right>
          <div className="skills-item">
            <h3 className="title">Back End</h3>
            {generalSkills.map((item, index) => {
              return (
                <div className="back-item">
                  <BsCheckCircleFill className="skill-icon" />
                  <div className="skills-info">
                    <h4 class="skills-name">{item.name}</h4>
                    <span class="skills-level">{item.level}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Skills;
