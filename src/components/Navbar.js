import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo1.svg";
import germanyFlag from "../images/germany-icon.png";
import italyFlag from "../images/italy-icon.png";
import usaFlag from "../images/usa-icon.png";
import { useGlobalContext } from "../context";

const Navbar = () => {
  // const [language, setLanguage] = useState("english");
  const { language, setLanguage } = useGlobalContext();

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <div className="logo-cocktail">
            <img src={logo} alt="cocktail db logo" className="logo1" />
            <h2>
              Cocktails
              <span style={{ color: "orange" }}>-Chill</span>{" "}
            </h2>
            <img src={logo} alt="cocktail db logo" className="logo2" />
          </div>
        </Link>
        {language === "english" ? (
          <ul className="nav-links">
            <li>
              <Link style={{ color: "orange" }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link style={{ color: "#73a54f" }} to="/about">
                About
              </Link>
            </li>
            <li className="language-type">
              <img
                onClick={() => setLanguage("germany")}
                src={germanyFlag}
                alt="germanyFlag"
              />
              <img
                onClick={() => setLanguage("italy")}
                src={italyFlag}
                alt="italyFlag"
              />
            </li>
          </ul>
        ) : null}
        {language === "germany" ? (
          <ul className="nav-links">
            <li>
              <Link style={{ color: "orange" }} to="/">
                Zuhause
              </Link>
            </li>
            <li>
              <Link style={{ color: "#73a54f" }} to="/about">
                Über Uns
              </Link>
            </li>
            <li className="language-type">
              <img
                onClick={() => setLanguage("english")}
                src={usaFlag}
                alt="usaFlag"
              ></img>
              <img
                onClick={() => setLanguage("italy")}
                src={italyFlag}
                alt="italyFlag"
              />
            </li>
          </ul>
        ) : null}
        {language === "italy" ? (
          <ul className="nav-links">
            <li>
              <Link style={{ color: "orange" }} to="/">
                Casa
              </Link>
            </li>
            <li>
              <Link style={{ color: "#73a54f" }} to="/about">
                Chi Siamo
              </Link>
            </li>
            <li className="language-type">
              <img
                onClick={() => setLanguage("germany")}
                src={germanyFlag}
                alt="germanyFlag"
              />
              <img
                onClick={() => setLanguage("english")}
                src={usaFlag}
                alt="usaFlag"
              />
            </li>
          </ul>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
