import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "../styles/addMenuForm.module.css"; // Import CSS module

const AddStaffForm = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const staff = location.state?.staff;

  const [name, setName] = useState(staff.name)
  const [contactNumber, setContactNumber] = useState(staff.contactNumber)
  const [role, setRole] = useState(staff.role)
  const [email, setEmail] = useState(staff.email)
  const [salary, setSalary] = useState(staff.salary)
  const [imgPath,setImgPath] = useState(staff.imgPath)
  const [error,setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add the logic to submit the form data
    const updatedStaff = {name, contactNumber, role, email, salary, imgPath}
    const response = await fetch('http://localhost:5000/api/staff/update/' + staff._id,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedStaff)
    })
    const json = await response.json()
    if(!response.ok){
      setError(json.message);
    }
    if(response.ok){
      setError(null)
      navigate(-1)
    }
  };

  return (
    <div className={styles['adddish-page']}> {/* Correct class name application */}
      <div className={styles['adddish-form-container']}> {/* Correct class name application */}
        <h2 className={styles.heading}>Updating Staff</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Add Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            required
          />

          <label className={styles.label}>
            Contact Number:
          </label>
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className={styles.input}
            required
          />

          <label className={styles.label}>
            Role:
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={styles.select}
            required
          >
            <option value="">Select Role</option>
            <option value="waiter">Waiter</option>
            <option value="Chef">Chef</option>
            <option value="kitchen staff">Kitchen Staff</option>
          </select>

          <label className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />

          <label className={styles.label}>
            Gross Salary:
          </label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className={styles.input}
            required
          />

          <label className={styles.label}>
            Image URL:
          </label>
          <input
            type="text"
            value={imgPath}
            onChange={(e) => setImgPath(e.target.value)}
            className={styles.input}
            required
          />

          <button type="submit" className={styles.button}>
            Update Staff
          </button>
          {error && <div className={styles.label}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default AddStaffForm;
