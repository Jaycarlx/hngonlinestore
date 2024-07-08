import React from "react";
import "./Navbar.css";
import { assets } from "../Assets/assets";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="navbar">
      <Link to="/">
        <img
          src={assets.logo}
          alt="Fresh Bites"
        />
      </Link>
      <div className="navbar-menu">
        <div className="search-box">
          <img src={assets.Search} alt="Search Icon" className="search-icon" />
          <p>Search food</p>
        </div>
        <Link to="/login">
          {location.pathname === "/" && (
            <button className="login">Log In</button>
          )}
        </Link>

        <div className="cart">
          <Link to="/cart">
            <img src={assets.cart} alt="Cart" className="cartIcon" />
          </Link>
          <div className="dot"></div>
        </div>
        {!isHomePage ? (
          <img src={assets.userwhite} alt="user" className="user" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
