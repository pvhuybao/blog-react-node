import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=art">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=art">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=art">
            <h6>FOOD</h6>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <Link className="write" to="/write">
            <span className="link">Write</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
