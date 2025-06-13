// src/pages/Register.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom";
import donutImage from "../assets/registration.png";
import {Mail, User, Lock} from 'lucide-react';
import './Registration.css'

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();

    navigate('/login');
  };
  return (
     <div className="page-wrapper">
      <div className="main-container">
        <div className="registration-container">
          <div className="registration-left">
            <img src={donutImage} alt="Food background" />
          </div>
          <div className="registration-right">
            <div className="form-card">
              <h2 className="registration-title">CREATE YOUR ACCOUNT</h2>
              
                <form onSubmit = {handleSubmit}>
                <div className="input-box">
                  <Mail size={25} strokeWidth={3} />
                  <input type="email" placeholder="Enter your email" required />
                </div>

                <div className="input-box">
                  <User size={25} strokeWidth={3} />
                  <input type="text" placeholder="Enter your full name" required />
                </div>

                <div className="input-box">
                  <Lock size={25} strokeWidth={3} />
                  <input type="password" placeholder="Create a password" required />
                </div>

                <button type="submit" className="signup-btn">Sign up </button>
             <p> Already have an account? </p>
         </form>
        </div>
       </div>
     </div>
    </div>
   </div>
  );
}

export default Register
