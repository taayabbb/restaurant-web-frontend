import React, { useState } from "react";

const ReserveTable = () => {
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url('/path/to/your/background/image.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "20px",
      }}
    >
        <style>
        {`
          input::placeholder {
            color: white; /* Set placeholder color to yellow */
          }
        `}
      </style>
      <h1
        style={{
          fontSize: "30px",
          color: "white",
          marginBottom: "20px",
        }}
      >
        Reserve Your Table
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "rgba(255, 255, 255, 0.1)",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid rgba(255, 255, 255, 0.22)",
          backdropFilter: "blur(11.1px)",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Contact Number"
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <input
          type="time"
          name="reservationTime"
          value={formData.reservationTime}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <input
          type="number"
          name="totalPeople"
          value={formData.totalPeople}
          onChange={handleChange}
          placeholder="Total Number of People"
          required
          min="1"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <input
          type="text"
          name="tableId"
          value={formData.tableId}
          onChange={handleChange}
          placeholder="Table ID"
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "20px",
          }}
        >
          Book Now!
        </button>
      </form>
    </div>
  );
};

export default ReserveTable;
