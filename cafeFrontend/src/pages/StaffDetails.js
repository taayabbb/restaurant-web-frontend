import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/DishDetails.module.css';

function DishDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Retrieve staff details from location state
  const staff = location.state?.staff;

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

  const handleDelete = async () => {
    const response = await fetch('http://localhost:5000/api/staff/delete/' + staff._id, {
      method: 'DELETE'
    })
    const json = await response.json()
    if(response.ok){
      navigate(-1)
    }
  }

  return (
    <div className={styles.dishDetailsContainer}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Back to Staff Management
      </button>
      <div className={styles.dishDetailsCard}>
        <img src={staff.imgPath} alt={staff.name} className={styles.dishImage} />
        <h1 className={styles.dishName}>{staff.name}</h1>
        <p className={styles.staffRole}>Role: {staff.role}</p>
        <p className={styles.staffCNIC}>Contact no.: {staff.contactNumber}</p>
        <p className={styles.staffExperience}>Email: {staff.email}</p>
        <div className={styles.buttonsContainer}>
          <button className={styles.crudButtonsButton} onClick={() => navigate('/UpdateStaffForm', { state : {staff}})}>Update Info about Staff Member</button>
          <button className={styles.crudButtonsButton} onClick={handleDelete} >Remove Staff Member</button>
        </div>
      </div>
    </div>
  );
}

export default DishDetails;
