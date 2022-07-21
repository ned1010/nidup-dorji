import React from "react";
import Copyright from "./Copyright";
import { FaInstagram } from "react-icons/fa";
import { BsGithub,BsTwitter, BsYoutube } from "react-icons/bs";
import "./Footer.css";
import { navItems } from "../data/navbarItem";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="title">Nidup</h1>
      <ul className="footer-link">
        {navItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={"#" + item.name} className="footer-item">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="footer-social">
        <a
          rel="noopener noreferrer"
          href="https://github.com/nidup1010"
          target="_blank"
          className="social-link"
        >
          <BsGithub />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/neddy_98/"
          target="_blank"
          className="social-link"
        >
          <FaInstagram />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.twitter.com/"
          target="_blank"
          className="social-link"
        >
          <BsTwitter />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCMslECTvJJNIGH7H6q01xMw"
          target="_blank"
          className="social-link"
        >
          <BsYoutube />
        </a>
      </div>

      <Copyright />
    </div>
  );
};

export default Footer;
