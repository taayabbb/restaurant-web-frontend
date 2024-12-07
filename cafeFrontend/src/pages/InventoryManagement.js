import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InventoryManagement = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("In Stock");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredInventory, setFilteredInventory] = useState([]);
  const navigate = useNavigate(); // This is important for navigation

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handlenavigationtoInventory = () => {
    navigate("/Inventory");
  };

  const handlenavigationtoAddStock = () => {
    navigate("/AddStock");
  };

  const handlenavigationtoUpdateStock = () => {
    navigate("/UpdateStock");
  };

  const handleSearch = () => {
    const inventoryData = {
      "In Stock": ["Item 1", "Item 2", "Item 3"],
      "Out of Stock": ["Item 4", "Item 5"],
      "Low Stock": ["Item 6", "Item 7"],
    };

    const inventoryInCategory = inventoryData[activeCategory];
    const results = inventoryInCategory.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredInventory(results);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setDropdownOpen(false);
    setSearchQuery(""); // Reset search query
    setFilteredInventory([]); // Reset filtered inventory
  };

  const renderInventory = () => {
    const inventoryData = {
      "In Stock": ["Item 1", "Item 2", "Item 3"],
      "Out of Stock": ["Item 4", "Item 5"],
      "Low Stock": ["Item 6", "Item 7"],
    };
    const inventoryToRender =
      filteredInventory.length > 0 || searchQuery ? filteredInventory : inventoryData[activeCategory];

    return (
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {inventoryToRender.map((item, index) => (
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
            {item}
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
        <h2 style={{ fontSize: "18px", marginBottom: "20px" }}>Inventory Management</h2>
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
          View all inventory
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
              onClick={() => handleCategoryClick("In Stock")}
            >
              In Stock
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
              onClick={() => handleCategoryClick("Out of Stock")}
            >
              Out of Stock
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
              onClick={() => handleCategoryClick("Low Stock")}
            >
              Low Stock
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
          onClick={handlenavigationtoInventory}
        >
          View all inventory
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
          onClick={handlenavigationtoAddStock}
        >
          Add a stock
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
          onClick={handlenavigationtoUpdateStock}
        >
          Update stock
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
            placeholder="Search Inventory"
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
          {activeCategory} Inventory
        </h2>
        {renderInventory()}
      </div>
    </div>
  );
};

export default InventoryManagement;
