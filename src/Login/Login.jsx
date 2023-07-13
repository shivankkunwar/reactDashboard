import React from 'react'
import "./Login.css";
function Login() {
  return (
    <div className="main-container">
        <div className="left-container">
            
            <span className='board'>Board.</span>
        </div>
        <div className="right-container">
            <h1 className="signin">Sign In</h1>
            <p className="subtitle">Sign into your account</p>
            <div className="button-row">
                <button className="google-btn">Login with Google</button>
                <button className="apple-btn">Login with Apple</button>
            </div>
            <form className="login-form">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#" className="forgot-password">Forgot password?</a>
            <button type="submit" className="signin-btn">Sign In</button>
            </form>
            <p className="register">Don't have an account? Register here</p>
        </div>
        
    </div>
  )
}

export default Login