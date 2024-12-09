
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ReservationManagementPage.css"; // Import the CSS file

const TableMgt = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState();
  const navigate = useNavigate();

  const [tables,setTables] = useState([]);
  const [searchTables,setSearchTables] = useState([]);

  useEffect(() => {
    const fetchTables = async () => {
      const response = await fetch('http://localhost:5000/api/table/')
      const json = await response.json()
      if(response.ok){
        setTables(json)
      }
    }
    fetchTables()
  },[])

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleNavigationToReserveTable = () => {
    navigate("/add-reservation");
  };

  const handleNavigationToAllReservations = () => {
    navigate("/reservation-page");
  };

  const handleSearch = () => {
    const results = tables.filter((table) => {
      if(table.number == searchQuery) return true 
  });
    setSearchTables(results)
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setDropdownOpen(false);
    setSearchTables([])
  };

  return (
    <div className="reservation-management">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-title">La Montana</div>
        <h2 className="sidebar-subtitle">Table Management</h2>
        <button className="sidebar-button" onClick={handleDropdownToggle}>
          View all tables
          <span>{isDropdownOpen ? "▲" : "▼"}</span>
        </button>
        {isDropdownOpen && (
          <div className="dropdown">
            <button onClick={() => handleCategoryClick("booked")}>Booked</button>
            <button onClick={() => handleCategoryClick("free")}>Free</button>
          </div>
        )}
        {/* <button onClick={handleNavigationToReserveTable}>Reserve a table</button> */}
        <button onClick={()=>navigate('/reservation-page')}>View all reservations</button>
        <button onClick={() => navigate('/inventory-management')}>View Inventory</button>
        <button onClick={() => navigate('/special-dish')}>Add a special dish</button>
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
          <ul className="table-list">
            {  activeCategory ==='' && searchTables && searchTables.map((table) => (
            <li key={table.number} className="table-item">
              <p>Table No:{table.number}   Capacity:{table.capacity}     Status:{table.status}</p>
            </li>
          ))}
          { activeCategory !== '' && tables.filter((table) => table.status === activeCategory).map((table) => (
            <li key={table.number} className="table-item">
              <p>Table No:{table.number}   Capacity:{table.capacity}     Status:{table.status}</p>
            </li>
          ))}
          { activeCategory ==='' && (searchTables.length===0) && tables.map((table) => (
            <li key={table.number} className="table-item">
              <p>Table No:{table.number}   Capacity:{table.capacity}     Status:{table.status}</p>
            </li>
          ))}
          </ul>
      </div>
    </div>
  );
};

export default TableMgt;
