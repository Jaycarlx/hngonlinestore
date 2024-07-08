import React from "react";
import "./CtaMenu.css";
import { assets } from "../Assets/assets";
import { Link } from "react-router-dom";

const CtaMenu = () => {
  return (
    <div className="ctaMenuBox">
      <img src={assets.ctaImg} alt="" />
      <div className="ctaTextBox">
        <h1>
          Celebrate parties with{" "}
          <span className="highlight"> Fried Chicken</span>
        </h1>
        <p>
          Get the best fried chicken smeared with a lip smacking lemon chili
          flavor. Check out best deals for fried chicken.
        </p>
        <Link to="/signup">
          <button className="ctaBtn">Proceed to order &gt;</button>
        </Link>
      </div>
    </div>
  );
};

export default CtaMenu;
