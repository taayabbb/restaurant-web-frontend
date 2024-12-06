import React, { useState } from 'react';
import styles from '../styles/ManageMenu.module.css'; // Import CSS Module
//importing the images because they were in the src folder imorting them as module
import { useNavigate } from 'react-router-dom';
import shrimpimage from '../images/shrimp.jpg';
import curryimage from '../images/curry.jpg';
import pizzaimage from '../images/pizza.jpg';
import steak from '../images/steak.jpg';
function ManageMenu() {
  const navigate = useNavigate();
  const [menu] = useState([
    { id: 1, name: 'Grilled Shrimp', category: 'Seafood', image: shrimpimage },
    { id: 2, name: 'Spicy Chicken Curry', category: 'Chicken', image:curryimage },
    { id: 3, name: 'Vegetarian Pizza', category: 'Vegetarian', image:pizzaimage },
    { id: 4, name: 'Steak', category: 'Beef', image: steak},
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMenu = menu.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewDetails = (dish) => {
    navigate('/DishDetails', { state: { dish } });
  };

  return (
    <div className={styles.menuManagementContainer}>
      <h1 className={styles.menuTitle}>Management Of Menu</h1>
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
      <h2 className={styles.menuSubtitle}>Our Famous Dishes</h2>
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

export default ManageMenu;
