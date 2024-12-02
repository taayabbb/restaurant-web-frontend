import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import './Dashboard.css'; // Make sure this path is correct
import Login from './Login'; // Import the Login component
import SignUp from './sighnup';//importing the sighup 
import AdminDashboard from './AdminDashboard';//importing the admin dashboard
import AdminHome from './AdminHome';
import Managemenu from './ManageMenu';
import DishDetails from './DishDetails';
import ManageStaff from './ManageStaff';
import StaffDetails from './StaffDetails';
import AdminReport from './AdminReport';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Dashboard route */}
          <Route path="/login" element={<Login />} /> {/* Login page route */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
          <Route path="/AdminHome" element={<AdminHome/>}/>
          <Route path="/Managemenu" element={<Managemenu/>}/>
          <Route path="/DishDetails" element={<DishDetails/>}/>
          <Route path="/ManageStaff" element={<ManageStaff/>}/>
          <Route path="/StaffDetails" element={<StaffDetails/>}/>
          <Route path="/AdminReport" element={<AdminReport/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
