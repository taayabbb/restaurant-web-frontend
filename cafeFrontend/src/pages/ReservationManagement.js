import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const ReservationManagement = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Occupied");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTables, setFilteredTables] = useState([]);
  const navigate= useNavigate();//this thing is important

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handlenavigationtoreservatable =() =>{
    navigate("/ReserveTable");
  };
  const handlenavigationtoAllreservations =()=>{
    navigate("/AllReservations");
  };
  const handleSearch = () => {
    const tableData = {
      Occupied: ["Table 1", "Table 2", "Table 3"],
      Reserved: ["Table 4", "Table 5"],
      Available: ["Table 6", "Table 7", "Table 8"],
    };

    const tablesInCategory = tableData[activeCategory];
    const results = tablesInCategory.filter((table) =>
      table.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTables(results); 
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setDropdownOpen(false);
    setSearchQuery(""); 
    setFilteredTables([]); 
  };

  const renderTables = () => {
    const tableData = {
      Occupied: ["Table 1", "Table 2", "Table 3"],
      Reserved: ["Table 4", "Table 5"],
      Available: ["Table 6", "Table 7", "Table 8"],
    };
    const tablesToRender =
      filteredTables.length > 0 || searchQuery ? filteredTables : tableData[activeCategory];

    return (
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tablesToRender.map((table, index) => (
          <li
            key={index}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "5px",
              padding: "10px",
              margin: "5px 0",
              color: "white",
            }}
          >
            {table}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundImage: `url('/path/to/your/background/image.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "350px",
          padding: "20px",
          background: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.22)",
          backdropFilter: "blur(11.1px)",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
      >
        <div style={{ fontSize: "30px", fontWeight: "bold", marginBottom: "20px" }}>
          La Montana
        </div>
        <h2 style={{ fontSize: "18px", marginBottom: "20px" }}>Reservation Management</h2>
        <button
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "16px",
            marginBottom: "10px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
          onClick={handleDropdownToggle}
        >
          View all tables
          <span style={{ marginLeft: "10px" }}>{isDropdownOpen ? "▲" : "▼"}</span>
        </button>
        {isDropdownOpen && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <button
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                border: "none",
                borderRadius: "8px",
                color: "white",
                padding: "10px 140px",
                marginTop: "10px",
                cursor: "pointer",
                width: "100%",
              }}
              onClick={() => handleCategoryClick("Occupied")}
            >
              Occupied
            </button>
            <button
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                border: "none",
                borderRadius: "8px",
                color: "white",
                padding: "10px 140px",
                marginTop: "10px",
                cursor: "pointer",
                width: "100%",
              }}
              onClick={() => handleCategoryClick("Reserved")}
            >
              Reserved
            </button>
            <button
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                border: "none",
                borderRadius: "8px",
                color: "white",
                padding: "10px 140px",
                marginTop: "10px",
                cursor: "pointer",
                width: "100%",
              }}
              onClick={() => handleCategoryClick("Available")}
            >
              Available
            </button>
          </div>
        )}
        <button
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            border: "none",
            borderRadius: "8px",
            color: "white",
            padding: "10px 20px",
            marginTop: "10px",
            cursor: "pointer",
            width: "100%",
          }}
          onClick={handlenavigationtoreservatable}
        >
          Reserve a table
        </button>
        <button
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            border: "none",
            borderRadius: "8px",
            color: "white",
            padding: "10px 20px",
            marginTop: "10px",
            cursor: "pointer",
            width: "100%",
          }}
          onClick={handlenavigationtoAllreservations}
        >
          View all reservations
        </button>
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          color: "white",
        }}
      >
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Search Table with ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              padding: "10px 20px",
              border: "none",
              background: "rgba(255, 255, 255, 0.3)",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>
        <h2 style={{ fontSize: "18px", marginBottom: "20px" }}>
          {activeCategory} Tables
        </h2>
        {renderTables()}
      </div>
    </div>
  );
};

export default ReservationManagement;
