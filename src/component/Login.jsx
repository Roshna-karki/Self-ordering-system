// src/pages/Login.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import donutImage from "../assets/registration.png";
import{Mail,User,Lock} from 'lucide-react';
import './Login.css'

const Login = () => {
  return (
     <div className="page-Wrapper">
      <div className="full-container">
        <div className="login-container">
            <div className="login-left">
                 <img src={donutImage}alt="Food background"/>
            </div>
                <div className="login-right">
                    <div className="form card">
                        <h2 className="login-title"> Welcome To Spice Bite </h2>
                        <div className="input-box">
                            <Mail size={25} strokeWidth={3}/>
                            <input type="email" placeholder="Email"/>
                        </div>
                        <div className="input-box">
                            <Lock size={25} strokeWidth={3}/>
                            <input type="password" placeholder="Password"/>
                        </div>
                          <button type="submit" className="signin-btn">Sign In </button>           
             <p> Don't have an account? <Link to="/register">Register here</Link> </p>
            </div>
           </div>
          </div>
        </div>
      </div>
  );
};

export default Login
