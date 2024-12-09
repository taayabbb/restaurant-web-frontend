import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ReservationPage.css"; // Import the CSS file

const ReservationPage = () => {
  // Sample reservations data
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);
  useEffect(() =>{
    const fetchReservations = async ()=>{
        const response = await fetch('http://localhost:5000/api/reservation/')
        const json = await response.json()
        if(response.ok){
            setReservations(json)
        }
    }
    fetchReservations()
  },[])

  return (
    <div className="all-reservations-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-title">La Montana</div>
        <h2 className="sidebar-subtitle">Reservation Management</h2>
        <button className="back-button" onClick={() => window.history.back()}>
          Go Back
        </button>
      </div>

      {/* Content */}
      <div className="content">
        <h1 className="content-title">All ongoing Reservations</h1>
        <table className="reservations-table">
          <thead>
            <tr>
              <th>Reservation ID</th>
              <th>Table</th>
              <th>Time</th>
              <th>Name</th>
              <th>Billing Status</th>
            </tr>
          </thead>
          <tbody>
            {reservations.filter((reservation) => reservation.status === 'reserved' ).map((reservation) => (
              <tr key={reservation._id}>
                <td>{reservation._id}</td>
                <td>{reservation.tableNumber}</td>
                <td>{reservation.time}</td>
                <td>{reservation.customer.name}</td>
                <td><button onClick={() => navigate('/billing',{state:{reservation}})}>Start</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservationPage;
