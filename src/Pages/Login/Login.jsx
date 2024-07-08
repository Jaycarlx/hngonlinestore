import React from "react";
import "./Login.css";
import { assets } from "../../Components/Assets/assets";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="logo" />
        </Link>

        <h1 className="logoName">FRESHBITES</h1>
      </div>
      <div className="signup-container">
        <div className="form-container" id="form-container">
          <h2>Welcome Back</h2>
          <p>Please log in your details</p>
          <form action="">
            <input name="email" class="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <input type="password" placeholder="Confirm your password" />
            <button id="signupbtn">Log in</button>
            <p id="existing-user">
              Don't have an account?
              <Link to="/signUp">
                <a href="#signup"> Sign up</a>
              </Link>
            </p>
          </form>
        </div>
        <img src={assets.signupImg} alt="" className="signup-img" />
      </div>
    </div>
  );
};

export default Login;
