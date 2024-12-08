import React, { useState } from "react";
import "../styles/AddReservationForm.css"; // Import the CSS file

const AddReservationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    reservationTime: "",
    totalPeople: "",
    tableId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reservation submission (e.g., save the data or send a request)
    console.log("Reservation Submitted:", formData);
  };

  return (
    <div className="reserve-table-container">
      <h1 className="reserve-table-title">Reserve Your Table</h1>
      <form className="reserve-table-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="form-input"
        />
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Contact Number"
          required
          className="form-input"
        />
        <input
          type="time"
          name="reservationTime"
          value={formData.reservationTime}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="number"
          name="totalPeople"
          value={formData.totalPeople}
          onChange={handleChange}
          placeholder="Total Number of People"
          required
          min="1"
          className="form-input"
        />
        <input
          type="text"
          name="tableId"
          value={formData.tableId}
          onChange={handleChange}
          placeholder="Table ID"
          required
          className="form-input"
        />
        <button type="submit" className="form-submit-button">
          Book Now!
        </button>
      </form>
    </div>
  );
};

export default AddReservationForm;
