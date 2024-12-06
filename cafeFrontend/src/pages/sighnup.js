import React from 'react';
import '../styles/Login.css'; // Optional: Add CSS for your signup page
import logo from "../images/loginreal.jpg";
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate(); // Using the navigation hook

    const handleLoginRedirect = () => {
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="login-container">
            <img src={logo} alt="Sign Up Logo" className="login-image" />
            {/* Glassmorphism Container */}
            <div className="glass-container">
                <h2 className="login-title">-----LA-MONTANA-----</h2>
                <h3 className="login-subtitle">Sign up to enjoy our amazing offers!</h3>
                <h3 className="login-word">--------SIGN UP--------</h3>
                <form className="login-form">
                    {/* Username Input */}
                    <div className="input-group">
                        <input type="text" id="username" name="username" placeholder="Enter your username" />
                    </div>
                    {/* Email Input */}
                    <div className="input-group">
                        <input type="email" id="email" name="email" placeholder="Enter your email address" />
                    </div>
                    {/* Password Input */}
                    <div className="input-group">
                        <input type="password" id="password" name="password" placeholder="Enter your password" />
                    </div>
                    {/* Confirm Password Input */}
                    <div className="input-group">
                        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" />
                    </div>
                    {/* Sign Up Button */}
                    <button type="button" className="login-button">Sign Up</button>
                </form>
                {/* Login Redirect Link */}
                <div className="signup-container">
                    <p>Already have an account? <span onClick={handleLoginRedirect} className="signup-link">Login</span></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
