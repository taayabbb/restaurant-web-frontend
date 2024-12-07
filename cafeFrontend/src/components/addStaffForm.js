import React, { useState } from "react";
import styles from "../styles/addMenuForm.module.css"; // Import CSS module

const AddStaffForm = () => {
  const [name, setName] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')
  const [salary, setSalary] = useState('')
  const [imgPath,setImgPath] = useState('')
  const [error,setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add the logic to submit the form data
    const newStaff = {name, contactNumber, role, email, salary, imgPath}
    const response = await fetch('http://localhost:5000/api/staff/add',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newStaff)
    })
    const json = await response.json();
    if(!response.ok){
      console.log(json.error)
      setError(json.message)
    }
    if(response.ok){
      setError(null)
      setName('')
      setContactNumber('')
      setRole('')
      setEmail('')
      setSalary('')
      setImgPath('')
    }
  };

  return (
    <div className={styles['adddish-page']}> {/* Correct class name application */}
      <div className={styles['adddish-form-container']}> {/* Correct class name application */}
        <h2 className={styles.heading}>Adding Staff</h2>
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
            Add Staff
          </button>
          {error && <div className={styles.label}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default AddStaffForm;
