import React, { useState } from 'react';
import '../styles/Login.css'; // Optional: Add CSS for your signup page
import logo from "../images/loginreal.jpg";
import { useNavigate } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';

function SignUp() {
    const navigate = useNavigate(); // Using the navigation hook
    const [email,setEmail] = useState('')
    const [name,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const { signup , error, isLoading } = useSignup()
    const handleLoginRedirect = () => {
        navigate('/login'); // Redirect to login page
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(name,email,password)
    }

    return (
        <div className="login-container">
            <img src={logo} alt="Sign Up Logo" className="login-image" />
            {/* Glassmorphism Container */}
            <div className="glass-container">
                <h2 className="login-title">-----LA-MONTANA-----</h2>
                <h3 className="login-subtitle">Sign up to enjoy our amazing offers!</h3>
                <h3 className="login-word">--------SIGN UP--------</h3>
                <form className="login-form" onSubmit={handleSubmit}>
                    {/* Username Input */}
                    <div className="input-group">
                        <input type="text" value={name} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter your username" />
                    </div>
                    {/* Email Input */}
                    <div className="input-group">
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email address" />
                    </div>
                    {/* Password Input */}
                    <div className="input-group">
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" />
                    </div>
                    {/* Confirm Password Input */}
                    <div className="input-group">
                        <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm your password" />
                    </div>
                    {/* Sign Up Button */}
                    <button type="button" disabled={isLoading} className="login-button">Sign Up</button>
                    {error && <div>{error}</div>}
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
