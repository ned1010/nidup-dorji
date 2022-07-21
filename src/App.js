import React, { Fragment, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Project";
import Contacts from "./components/Contact/Contact";
import Books from "./components/Books/Books";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/utilities/ScrollUp";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Fragment>
        <BrowserRouter>
          <ScrollTop />
          <NavBar />
          <Home />
          <div data-aos="fade-right">
            <About />
          </div>
          <div data-aos="fade-down">
            <Skills />
          </div>
          <div data-aos="fade-up">
            <Books />
          </div>
          <div data-aos="flip-right">
            <Projects />
          </div>
          <div data-aos="fade-up">
            <Contacts />
          </div>
          <div data-aos="fade-up">
            <Footer />
          </div>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
