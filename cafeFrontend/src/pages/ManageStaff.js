import React, { useState } from 'react';
import styles from '../styles/ManageMenu.module.css'; // Import CSS Module
//importing the images because they were in the src folder imorting them as module
import { useNavigate } from 'react-router-dom';
import waiter1 from '../images/waiter1.jpg';
import waiter2 from '../images/waiter2.jpeg';
import cheif1 from  '../images/chief1.jpg';
import chief2 from '../images/chief2.jpg';
function ManageStaff() {
  const navigate = useNavigate();
  const [menu] = useState([
    { id: 1, name: "Chef Pasha", image: cheif1, role: "Chef" },
    { id: 2, name: "Chef Tayyab", image: chief2, role: "Chef" },
    { id: 3, name: "Waiter azhar", image: waiter1, role: "Waiter" },
    { id: 4, name: "Waiter Areeba", image: waiter2, role: "Waiter" },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMenu = menu.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewDetails = (dish) => {
    navigate('/StaffDetails', { state: { dish } });
  };

  return (
    <div className={styles.menuManagementContainer}>
      <h1 className={styles.menuTitle}>Management Of Staff</h1>
      <div className={styles.menuControls}>
        <input
          type="text"
          placeholder="Search here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.menuSearch}
        />
        <button className={styles.searchButton}>Search</button>
      </div>
      <h2 className={styles.menuSubtitle}>Our Remarkable Waiters and Staffs</h2>
      <div className={styles.menuGrid}>
        {filteredMenu.map((item) => (
          <div className={styles.menuCard} key={item.id}>
            <img src={item.image} alt={item.name} className={styles.menuImage} />
            <h3 className={styles.menuDishName}>{item.name}</h3>
            <button
              className={styles.menuViewDetails}
              onClick={() => handleViewDetails(item)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageStaff;
