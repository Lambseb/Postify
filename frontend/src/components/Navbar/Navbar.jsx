import "./navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/">
            <span>
              <img src={logo} alt="logo" className="logo" />
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/images" className="links">
            Images
          </NavLink>
          <NavLink to="/contact" className="links">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
