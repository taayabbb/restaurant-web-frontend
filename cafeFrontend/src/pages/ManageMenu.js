import React, { useState, useEffect } from 'react';
import styles from '../styles/ManageMenu.module.css'; // Import CSS Module

//importing the images because they were in the src folder imorting them as module
import { useNavigate } from 'react-router-dom';

//components

function ManageMenu() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [menuItems, setMenuItems] = useState([]);

  const filteredMenu = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewDetails = (dish) => {
    navigate('/DishDetails', { state: { dish } });
  };

  const handleSearch = () => {
    setMenuItems(filteredMenu);
  }


  useEffect(()=>{
    const fetchMenuItems = async () => {
      const response = await fetch('http://localhost:5000/api/menu/')
      const json = await response.json()

      if(response.ok){
        setMenuItems(json.menuItems)
      }
    }
    fetchMenuItems()
  }, [])

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
        <button className={styles.searchButton} onClick={handleSearch}>Search</button>
      </div>
      <h2 className={styles.menuSubtitle}>Our Famous Dishes</h2>
      <div className={styles.menuGrid}>
        {menuItems && menuItems.map( item => (
          <div className={styles.menuCard} key={item._id}>
            <img src={item.imgPath} alt={item.imgPath} className={styles.menuImage} />
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
      <button
            className={styles.addButton}
            onClick={() => navigate("/AddMenuForm")}
          >
            Add Dish
          </button>
          {/* <button
            className={styles.addButton}
            onClick={() => navigate("/updateMenuForm")}
          >
            Update Dish
          </button> */}
    </div>
  );

}

export default ManageMenu;