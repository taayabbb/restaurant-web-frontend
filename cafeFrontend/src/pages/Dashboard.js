// src/Dashboard.js
import React, { useState } from "react";
import "../styles/Dashboard.css"; 
import logo from "../images/Lamontana_logo-removebg-preview.png";
import { Link } from "react-router-dom";

function Dashboard() {
  // State to handle the sidebar toggle
  const [sidebarVisible, setSidebarVisible] = useState(false);
  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <nav className={`navbar ${sidebarVisible ? "active" : ""}`}>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#review">Review</a></li>
          <li><a href="#loyalty-program">Loyalty Program</a></li>
          <li><a href="#Order & Reservation">Order & Reservation</a></li>
          <Link to="/Login">
            <button className="loginbutton">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="signupbutton">Sign Up</button>
          </Link>
        </ul>
      </nav>

      {/* Main Content */}
      <header className="dashboard-header">
        {/* Logo */}
        <img src={logo} alt="La Montana Restaurant Logo" className="logo" />
        <h1>La Montana Restaurant</h1>
        <h2>----------Taste The Difference---------</h2>
      </header>
    </div>
  );
}

export default Dashboard;
