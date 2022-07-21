import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { navItems } from "../data/navbarItem";
import "./navbar.css";

import { AiOutlineMenuFold, AiFillCloseCircle } from "react-icons/ai";


function NavBar() {
  const [mobileView, setMobileView] = useState(false);

  const clickMobileView = () => setMobileView(!mobileView);
  const closeMobileView = () => setMobileView(false)

  return (
    <nav className="navbar container">
      <div className="logo">
        <Link to={"#home"} style={{ textDecoration: "none", color: "#000"}} onClick={closeMobileView}>
          <h1>Nidup</h1>
        </Link>
      </div>

      <ul className={mobileView ? "menu active": "menu"}>
        {navItems.map((item, index) => {
          return (
            <li className="menu-item" key={index}>
              <Link to={"#" + item.name} className="menu-link" onClick={closeMobileView}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* mobile-view-icons */}

      <div className="menu-icon">
        {mobileView ? <AiFillCloseCircle onClick={clickMobileView} /> : <AiOutlineMenuFold onClick={clickMobileView} />}
      </div>
    </nav>
  );
}

export default NavBar;
