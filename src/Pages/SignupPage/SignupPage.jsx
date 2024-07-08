import React from 'react'
import './SignupPage.css'
import { assets } from '../../Components/Assets/assets'
import { Link } from 'react-router-dom'

const SignupPage = () => {
    return (
        <div className="container">
            <div className="logo-container">
                    <Link to='/' >
                        <img src={assets.logo} alt="logo" className="logo" />
                    </Link>
                <h1 className="logoName">FRESHBITES</h1>
            </div>
            <div className="signup-container">
                <div className="form-container" id='form-container'>
                    <h2>Sign Up for Free</h2>
                    <p>Please fill this form to create an account</p>
                    <form action="">
                        <input  name="email" class="email" placeholder="Enter your email" />
                        <input type="password" placeholder='Enter your password' />
                        <input type="password" placeholder='Confirm your password' />
                        <button id='signupbtn'>Sign Up</button>
                        <p id='existing-user'>Already have an account?
                        <Link to='/login' >
                          <a href="#login"> Log in</a>
                             </Link>
                           </p>
                  </form>
                </div>
                <img src={assets.signupImg} alt="" className="signup-img" />
            </div>
        </div>
    )
}


export default SignupPage