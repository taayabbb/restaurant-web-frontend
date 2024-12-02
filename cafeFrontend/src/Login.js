import React from 'react';
import './Login.css'; // Optional: Add CSS for your login page
import logo from "./images/loginreal.jpg"
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();//using the navigation hook
    const handlesighnup=()=>{
        navigate('/signup');
    }
    const handleLogin=()=>{
      navigate('/AdminHome');
    }
  return (
    <div className="login-container">
         <img src={logo} alt="Login Logo" className="login-image" />
         {/* Glassmorphism Container */}
      <div className="glass-container">
        <h2 className="login-title">-----LA-MONTANA-----</h2>
        <h3 className="login-subtitle">Register yourself to get amazing offers!</h3>
        <h3 className="login-word">--------LOG IN--------</h3>
        <form className="login-form">
          {/* Username Input */}
          <div className="input-group">
            <input type="text" id="username" name="username" placeholder="Enter your username" />
          </div>
          {/* Password Input */}
          <div className="input-group">
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
           {/* Login Button */}
           <button type="button" className="login-button" onClick={handleLogin} >Login</button>
        </form>
        {/* Sign-Up Link */}
        <div className="signup-container">
          <p>Don't have an account? <span onClick={handlesighnup} className="signup-link">Sign up</span></p>
        </div>
        {/* Continue with Google/Facebook Buttons */}
        <div className="social-buttons">
          <button className="social-button google-button">Continue with Google</button>
          <button className="social-button facebook-button">Continue with Facebook</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
