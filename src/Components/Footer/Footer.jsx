import React from "react";
import "./Footer.css";
import { assets } from "../Assets/assets";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <div className="headings">
          <p className="head">Company</p>
          <a href="#aboutUS">About Us</a>
          <a href="#Team">Team</a>
          <a href="#Careers">Careers</a>
          <a href="#Blog">Blog</a>
        </div>
        <div className="headings">
          <p className="head">Contact</p>
          <a href="#Help and Support">Help and Support</a>
          <a href="#Partner with Us">Partner with Us</a>
          <a href="#Careers">Careers</a>
        </div>
        <div className="headings">
          <p className="head">Legal</p>
          <a href="#Terms & conditions">Terms & conditions</a>
          <a href="#Refund & cancellation">Refund & cancellation</a>
          <a href="#Privacy Policy">Privacy Policy</a>
          <a href="#Cookie Policy">Cookie Policy</a>
        </div>
        <div className="headings-social">
          <p className="headSocial">Follow Us</p>
          <img src={assets.icons} alt="" />
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-right-content">
          <h1>Receive exclusive offers in your mailbox</h1>
          <div className="email-content">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <button className="suscribe">Suscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
