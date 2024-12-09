import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/InventoryMgt.css";

const InventoryMgt = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("In Stock");
  const [searchQuery, setSearchQuery] = useState("");
  const [inventory,setInventory] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchInventory = async () => {
      const response = await fetch('http://localhost:5000/api/inventory/')
      const json = await response.json()

      if(response.ok){
        setInventory(json)
      }
    }
    fetchInventory()
  }, [])    

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSearch = () => {
    const results = inventory.filter((item) =>
      item.ingredientName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setInventory(results);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setDropdownOpen(false);
    setSearchQuery("");
  };



  return (
    <div className="inventory-management-container">
      <div className="sidebar">
        <div className="sidebar-title">La Montana</div>
        <h2 className="sidebar-subtitle">Inventory Management</h2>
        <button onClick={()=>navigate('/reservation-page')}>View all reservations</button>
        <button onClick={() => navigate('/special-dish')}>Add a special dish</button>
        <button onClick={() => navigate('/table-management')}>Table Management</button>
      </div>

      <div className="content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Inventory"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <h2 className="content-title">{activeCategory} Inventory</h2>
        {/* {renderInventory()} */}
        <ul className="inventory-list">
        {inventory.map((item, index) => (
          <li key={item._id} className="inventory-item">
            <p>Name: {item.ingredientName}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Threshold: {item.threshold}</p>
            <button onClick={() => navigate('/update-stock',{state: {item}})} >Update</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default InventoryMgt;
