import React from "react";
import "./HeaderStyle.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";

function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img className="header__icon" src={logo} alt="logo" />
        </Link>
        <Link to="/movies/popular">
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated">
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming">
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
