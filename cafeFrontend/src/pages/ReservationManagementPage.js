
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ReservationManagementPage.css"; // Import the CSS file

const ReservationManagement = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Occupied");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTables, setFilteredTables] = useState([]);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleNavigationToReserveTable = () => {
    navigate("/add-reservation");
  };

  const handleNavigationToAllReservations = () => {
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
      <ul className="table-list">
        {tablesToRender.map((table, index) => (
          <li key={index} className="table-item">
            {table}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="reservation-management">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-title">La Montana</div>
        <h2 className="sidebar-subtitle">Reservation Management</h2>
        <button className="sidebar-button" onClick={handleDropdownToggle}>
          View all tables
          <span>{isDropdownOpen ? "▲" : "▼"}</span>
        </button>
        {isDropdownOpen && (
          <div className="dropdown">
            <button onClick={() => handleCategoryClick("Occupied")}>Occupied</button>
            <button onClick={() => handleCategoryClick("Reserved")}>Reserved</button>
            <button onClick={() => handleCategoryClick("Available")}>Available</button>
          </div>
        )}
        <button onClick={handleNavigationToReserveTable}>Reserve a table</button>
        <button onClick={handleNavigationToAllReservations}>View all reservations</button>
      </div>

      {/* Content */}
      <div className="content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Table with ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <h2>{activeCategory} Tables</h2>
        {renderTables()}
      </div>
    </div>
  );
};

export default ReservationManagement;
