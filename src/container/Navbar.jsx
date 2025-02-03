import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Logo from "../images/logo.png"

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left w-32 text-white">
          <Link to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>
        <div className="nav-right">
          <Link className="hover:text-[#2fe29e] transition duration-150" to="/">
            Home
          </Link>
          <Link
            className="hover:text-[#2fe29e] transition duration-150"
            to="/service"
          >
            Service
          </Link>
          <Link
            className="hover:text-[#2fe29e] transition duration-150"
            to="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-[#2fe29e] transition duration-150"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
