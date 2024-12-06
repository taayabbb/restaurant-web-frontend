import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Dashboard from './pages/Dashboard';
import './styles/Dashboard.css'; // Make sure this path is correct
import Login from './pages/Login'; // Import the Login component
import SignUp from './pages/sighnup';//importing the sighup 
import AdminDashboard from './pages/AdminDashboard';//importing the admin dashboard
import AdminHome from './pages/AdminHome';
import Managemenu from './pages/ManageMenu';
import DishDetails from './pages/DishDetails';
import ManageStaff from './pages/ManageStaff';
import StaffDetails from './pages/StaffDetails';
import AdminReport from './pages/AdminReport';
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
