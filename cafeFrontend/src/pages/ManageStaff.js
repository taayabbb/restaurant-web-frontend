import React, { useEffect, useState } from 'react';
import styles from '../styles/ManageMenu.module.css'; // Import CSS Module
//importing the images because they were in the src folder imorting them as module
import { useNavigate } from 'react-router-dom';

function ManageStaff() {
  const navigate = useNavigate();

  const [staffMembers, setStaffMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStaffMembers = staffMembers.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewDetails = (staff) => {
    navigate('/StaffDetails', { state: { staff } });
  };
  
  const handleSearch = () => {
    setStaffMembers(filteredStaffMembers)
  }

  useEffect(() => {
    const fetchStaffMembers = async () => {
      const response = await fetch('http://localhost:5000/api/staff/')
      const json = await response.json();
      if(response.ok){
        setStaffMembers(json.staffMembers)
        console.log(json)
      }
    }
    fetchStaffMembers()
  }, [])

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
        <button className={styles.searchButton} onClick={handleSearch}>Search</button>
      </div>
      <h2 className={styles.menuSubtitle}>Our Remarkable Waiters and Staffs</h2>
      <div className={styles.menuGrid}>
        {staffMembers && staffMembers.map((staff) => (
          <div className={styles.menuCard} key={staff._id}>
            <img src={staff.imgPath}  className={styles.menuImage} />
            <h3 className={styles.menuDishName}>{staff.name}</h3>
            <button
              className={styles.menuViewDetails}
              onClick={() => handleViewDetails(staff)}
            >
              View Details
            </button>
          </div>
          
        ))}
      </div>

      <button
            className={styles.addButton}
            onClick={() => navigate("/AddStaffForm")}
          >
            Add Staff Member
          </button>
          <button
            className={styles.addButton}
            onClick={() => navigate("/UpdateStaffForm")}
          >
          Update Staff member
          </button>
    </div>
  );
}

export default ManageStaff;
