import React from "react";
import "./Header.css"; // Import the CSS file for styling
import { assets } from "../Assets/assets";

const Header = () => {
  return (
    <header className="header">
      <div className="header-contentBox">
        <div className="header-content">
          <h1>NEED A BITE</h1>
          <p>WITH JUST A CLICK LET'S FILL YOU UP</p>
        </div>
      </div>
      <div className="header-image">
        <img src={assets.headerImg} alt="Bowl of food" />
      </div>
      <div className="green"></div>
    </header>
  );
};

export default Header;
