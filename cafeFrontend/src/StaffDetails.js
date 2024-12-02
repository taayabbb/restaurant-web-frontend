import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './DishDetails.module.css';

function DishDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Retrieve staff details from location state
  const staff = location.state?.dish;

  if (!staff) {
    return (
      <div className={styles.noDishSelected}>
        <h2>No Staff Member Selected</h2>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className={styles.dishDetailsContainer}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Back to Staff Management
      </button>
      <div className={styles.dishDetailsCard}>
        <img src={staff.image} alt={staff.name} className={styles.dishImage} />
        <h1 className={styles.dishName}>{staff.name}</h1>
        <p className={styles.staffRole}>Role: {staff.role}</p>
        <p className={styles.staffCNIC}>CNIC: 12345-6789012-3</p>
        <p className={styles.staffExperience}>Years of Experience: 5</p>
        <p className={styles.staffSalary}>Gross Salary: $50,000</p>
        <p className={styles.staffPromotionLevel}>Promotion Level: Level 3</p>
        <p className={styles.staffDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum orci at felis ultrices, vel fringilla nulla lacinia.
          Suspendisse potenti.
        </p>
        <div className={styles.buttonsContainer}>
          <button className={styles.crudButtonsButton}>Add a New Staff Member</button>
          <button className={styles.crudButtonsButton}>Update Info about Staff Member</button>
          <button className={styles.crudButtonsButton}>Remove Staff Member</button>
        </div>
      </div>
    </div>
  );
}

export default DishDetails;
