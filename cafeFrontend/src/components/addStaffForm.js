import React, { useState } from "react";
import styles from "../styles/addMenuForm.module.css"; // Import CSS module

const AddStaffForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    CNIC: "",
    role: "", // Added role
    yearsOfExperience: "",
    grossSalary: "",
    promotionalLevel: "",
    picture: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add the logic to submit the form data
  };

  return (
    <div className={styles['adddish-page']}> {/* Correct class name application */}
      <div className={styles['adddish-form-container']}> {/* Correct class name application */}
        <h2 className={styles.heading}>Adding Staff</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name" className={styles.label}>
            Add Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />

          <label htmlFor="CNIC" className={styles.label}>
            CNIC:
          </label>
          <input
            type="text"
            id="CNIC"
            name="CNIC"
            value={formData.CNIC}
            onChange={handleChange}
            className={styles.input}
            required
          />

          <label htmlFor="role" className={styles.label}>
            Role:
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="">Select Role</option>
            <option value="Waiter">Waiter</option>
            <option value="Chef">Chef</option>
          </select>

          <label htmlFor="yearsOfExperience" className={styles.label}>
            Years of Experience:
          </label>
          <input
            type="number"
            id="yearsOfExperience"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            className={styles.input}
            required
          />

          <label htmlFor="grossSalary" className={styles.label}>
            Gross Salary:
          </label>
          <input
            type="number"
            id="grossSalary"
            name="grossSalary"
            value={formData.grossSalary}
            onChange={handleChange}
            className={styles.input}
            required
          />

          <label htmlFor="promotionalLevel" className={styles.label}>
            Promotional Level:
          </label>
          <input
            type="text"
            id="promotionalLevel"
            name="promotionalLevel"
            value={formData.promotionalLevel}
            onChange={handleChange}
            className={styles.input}
            required
          />

          <label htmlFor="picture" className={styles.label}>
            Upload Picture:
          </label>
          <input
            type="file"
            id="picture"
            name="picture"
            accept="image/*"
            className={styles.fileInput}
            onChange={handleChange}
          />

          <button type="submit" className={styles.button}>
            Add Staff
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStaffForm;
