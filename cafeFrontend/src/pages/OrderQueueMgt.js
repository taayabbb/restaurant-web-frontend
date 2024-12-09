
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ReservationManagementPage.css"; // Import the CSS file

const OrderQueueMgt = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useState();
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const fetchOrders = async () => {
        const response = await fetch('http://localhost:5000/api/order/')
        const json = await response.json()
        if(response.ok){
            setOrders(json)
        }
    }
    fetchOrders()
  },[])

  const handleSearch = () => {
    const results = orders.filter((order) =>
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setOrders(results);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setDropdownOpen(false);
    setSearchQuery("");
  };

  const updateOrderStatus = async (order) => {
    const response = await fetch('http://localhost:5000/api/order/' + order._id + '/status',{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(order)
        })
    }
  return (
    <div className="reservation-management">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-title">La Montana</div>
        <h2 className="sidebar-subtitle">Order Queue Management</h2>
        <button className="sidebar-button" onClick={handleDropdownToggle}>
          View all Orders
          <span>{isDropdownOpen ? "▲" : "▼"}</span>
        </button>
        {isDropdownOpen && (
          <div className="dropdown">
            <button onClick={() => handleCategoryClick("pending")}>Pending</button>
            <button onClick={() => handleCategoryClick("preparing")}>Preparing</button>
            <button onClick={() => handleCategoryClick("ready")}>Ready</button>
            <button onClick={() => handleCategoryClick("served")}>Served</button>
            <button onClick={() => handleCategoryClick("completed")}>Completed</button>
          </div>
        )}
        {/* <button onClick={handleNavigationToReserveTable}>Reserve a table</button>
        <button onClick={handleNavigationToAllReservations}>View all reservations</button> */}
      </div>

      {/* Content */}
      <div className="content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Orders with Customer name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <h2>{activeCategory} Orders</h2>
            <ul className="table-list">
            {activeCategory && orders.filter((order) => order.status === activeCategory)((order) => (
            <li key={order._id} className="table-item">
                <p>Customer:{order.customer.name}</p>
                <p>Amount: {order.totalAmount}</p>
                <select 
                value={order.status}
                onChange={(e) => {order.status = e.target.value;updateOrderStatus(order);setRefresh(1)}}
                className="select"
                required
                >
                    <option value="pending">Pending</option>
                    <option value="preparing">Preparing</option>
                    <option value="ready">Ready</option>
                    <option value="served">Served</option>
                    <option value="completed">Completed</option>

                </select>
            </li>
            ))}
            {activeCategory === '' && orders.map((order) => (
            <li key={order._id} className="table-item">
                <p>Customer:{order.customer.name}</p>
                <p>Amount: {order.totalAmount}</p>
                <select 
                value={order.status}
                onChange={(e) => {order.status = e.target.value;updateOrderStatus(order);setRefresh(1)}}
                className="select"
                required
                >
                    <option value="pending">Pending</option>
                    <option value="preparing">Preparing</option>
                    <option value="ready">Ready</option>
                    <option value="served">Served</option>
                    <option value="completed">Completed</option>

                </select>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default OrderQueueMgt;
