import React from "react";
import Social from "../data/social";
import "./Home.css";

import Slide from "react-reveal/Slide";
import HotTyper from "react-hot-typer";

const Home = () => {
  return (
    <div className="home container" id="home">
      {/* profile description and home picture*/}

      <div className="profile">
        <div className="profile-item">
          <Slide top>
            <div className="profile-greeting">
              <h1>Hello!</h1>
              <h3>I am Nidup</h3>
            </div>
          </Slide>

          <HotTyper className="dynamic-text"
            text={[
              "A Designer",
              "A Web Developer",
              "A Software Engineer",
              "A Musican :)",
            ]}
          />

          <a rel="noreferrer" href={require("./../../assets/CV/Nidup_Dorji_CV.pdf")} class="download-btn" target={"_blank"}>Download CV</a>
        </div>

        <img
          src={require("../../assets/images/profile.JPG")}
          className="profile-item profile-image"
          alt="profile"
        />
      </div>

      {/* Social */}
      <Social />
    </div>
  );
};

export default Home;
