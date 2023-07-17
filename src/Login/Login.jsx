import React from "react";
import "./Login.css";
import google from "../icons/google.svg";
import apple from "../icons/apple.svg";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";




function Login( {setAuth}) {
 
  
  return (
    
    <GoogleOAuthProvider clientId=''>
     
      
      <div className="lmain-container">
        <div className="lleft-container">
          <span className="board">Board.</span>
        </div>
        <div className="lright-container">
          <div className="signinTitle">
            <h1 className="signin">Sign In</h1>
            <p className="subtitle">Sign into your account</p>
          </div>

          <div className="button-row">
            <div className="google-btn">
              <GoogleLogin
                className='innerGoogle'
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  setAuth(credentialResponse.credential);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
            <button className="apple-btn">
              <img src={apple} className="icons" alt="" />
              <span className="text">Login with Apple</span>
            </button>
          </div>
          <form className="login-form">
            <label htmlFor="">Email address</label>
            <input type="enter" placeholder="enter email address" />
            <label htmlFor="">Password</label>
            <input type="password" placeholder="enter password" />
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
            <button type="submit" className="signin-btn">
              Sign In
            </button>
          </form>
          <p className="register">
            Don't have an account?<a href="#"> Register here</a>{" "}
          </p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
