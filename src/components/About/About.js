import React from "react";
import "./About.css";

import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';


const About = () => {
  return (
    <div className="container" id="About" data-aos="fade-in">
      <h1 className="title">About Me</h1>
      <div className="about">
        <Zoom>
        <img
          src={require("./../../assets/images/about.jpg")}
          className="about-item about-image"
          alt="about-me-img"
        />
        </Zoom>
        <div className="about-item">
          <Fade top>
          <h3 className="about-title">I am Nidup Dorji</h3>
          <span className="sub-info">
            Full Stack Developer, Photographer & Guitarist
          </span>
          </Fade>
          <p>
            I am a newly graduate from Ashoka University with degree in Computer
            Science. My area of interest lies in Machine Learning and AI stuffs.
            Almost 90% of the the world's data has been generated in the last
            couple of years, and at this rate, we could extract meaningful
            insights using AI and ML to solve many problems in the world. 
            <br></br>
            <span className="reading">
              I am a vigorous readers and like to read all sorts of books from
              non-fictions to autobiographies. <br></br>Trying to read 50 books every year.
            </span>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
