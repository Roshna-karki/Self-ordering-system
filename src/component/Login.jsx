import React from 'react';
import './Login.css';
import donutImage from "../assets/registration.png";
import { Mail, Lock } from 'lucide-react';

const Login = () => {
  return (
    <div className="page-wrapper">
      <div className="main-container">
        <div className="login-container">
          <div className="login-left">
            <img src={donutImage} alt="Food background" />
          </div>
          <div className="login-right">
            <div className="form-card">
              <h2 className="login-title">WELCOME BACK</h2>
              
              <div className="input-box">
                <Mail size={25} strokeWidth={3} />
                <input type="email" placeholder="Enter your email" required />
              </div>
              
              <div className="input-box">
                <Lock size={25} strokeWidth={3} />
                <input type="password" placeholder="Enter your password" required />
              </div>
              
              <div className="forgot-password">
                <a href="#" className="forgot-link">Forgot Password?</a>
              </div>
              
              <button type="submit" className="login-btn">Sign in</button>
              
              <div className="signup-link">
                Don't have an account? <a href="#" className="register-link">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;