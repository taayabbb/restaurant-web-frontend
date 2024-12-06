// src/AdminHome.js
// This is the admin home page. It includes navigation for admin-specific tasks.
import React from "react";
import '../styles/AdminHome.css'; 
import logo from "../images/Lamontana_logo-removebg-preview.png";
import { Link } from "react-router-dom";
function AdminHome() {
  return (
    <div className="admin-home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="navbar-links">
          <Link to="/AdminDashboard" className="navbar-link">
            <li>Admin Dashboard</li>
          </Link>
          <Link to="/AdminReport" className="navbar-link">
            <li>Admin Reports</li>
          </Link>
          <Link to="/ManageMenu" className="navbar-link">
            <li>Manage Menu</li>
          </Link>
          <Link to="/ManageStaff" className="navbar-link">
            <li>Manage Staff</li>
          </Link>
        </ul>
      </nav>

      {/* Main Content */}
      <header className="admin-header">
        {/* Logo */}
        <img src={logo} alt="La Montana Restaurant Logo" className="logo" />
        <h1>Admin Panel - La Montana Restaurant</h1>
        <h2>Manage your restaurant efficiently!</h2>
      </header>
    </div>
  );
}

export default AdminHome;
