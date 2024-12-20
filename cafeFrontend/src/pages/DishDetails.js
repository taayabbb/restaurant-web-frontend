import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/DishDetails.module.css';

function DishDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve dish details from location state
  const dish = location.state?.dish;

  const handleDelete = async () => {
    const response = await fetch('http://localhost:5000/api/menu/delete/' + dish._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if(response.ok){
      navigate(-1)
    }
  }

  if (!dish) {
    return (
      <div className={styles.noDishSelected}>
        <h2>No Dish Selected</h2>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className={styles.dishDetailsContainer}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Back to Menu
      </button>
      <div className={styles.dishDetailsCard}>
        <img src={dish.imgPath} alt={dish.name} className={styles.dishImage} />
        <h1 className={styles.dishName}>{dish.name}</h1>
        <p className={styles.dishCategory}>Category: {dish.category}</p>
        <p className={styles.dishprice}>Price {dish.price}</p>
        <p className={styles.dishDescription}>
          {dish.description}
        </p>
        <div className={styles.buttonsContainer}>
        <button
               className={styles.crudButtonsButton}
                onClick={() => navigate("/UpdateMenuForm", { state: { dish } })}
          > 
          Update Dish
        </button>
        <button className={styles.crudButtonsButton} onClick={handleDelete} >Delete Dish</button>
        <button className={styles.crudButtonsButton}>Mark as out of stock</button>
        {/* <button
            className={styles.addDishButton}
            onClick={() => navigate("/AddMenuForm")}
          >
            Add Dish
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default DishDetails;
