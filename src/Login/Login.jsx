import React from 'react'
import "./Login.css";
import google from "../icons/google.svg"
import apple from "../icons/apple.svg"
function Login() {
  return (
    <div className="main-container">
        <div className="left-container">
            
            <span className='board'>Board.</span>
        </div>
        <div className="right-container">
            <div className="signinTitle">
            <h1 className="signin">Sign In</h1>
            <p className="subtitle">Sign into your account</p>
            </div>
            
            <div className="button-row">
                <button className="google-btn"> 
                
                <img src={google} className='icons' alt="" />
                 Login with Google
                </button>
                <button className="apple-btn">
                <img src={apple} className='icons'alt="" />
                Login with Apple</button>
            </div>
            <form className="login-form">
            <label htmlFor="">Email address</label>   
            <input type="enter" placeholder="enter email address" />
            <label htmlFor="">Password</label>   
            <input type="password" placeholder="enter password" />
            <a href="#" className="forgot-password">Forgot password?</a>
            <button type="submit" className="signin-btn">Sign In</button>
            </form>
            <p className="register">Don't have an account? Register here</p>
        </div>
        
    </div>
  )
}

export default Login