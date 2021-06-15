import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo1.svg";

const Navbar = () => {
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
