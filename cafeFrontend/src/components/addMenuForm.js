import React, { useState } from "react";
import styles from "../styles/addMenuForm.module.css"; // Import CSS module

const AddMenuForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    isSpecial: false,
    isInStock: false,
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
        <h2 className={styles.heading}>Adding Dish</h2>
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
          <label htmlFor="price" className={styles.label}>
            Add Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={styles.input}
            required
          />

          <label htmlFor="description" className={styles.label}>
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={styles.textarea}
            required
          ></textarea>

          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="isSpecial"
                checked={formData.isSpecial}
                onChange={handleChange}
              />
              Is the Dish Special?
            </label>

            <label>
              <input
                type="checkbox"
                name="isInStock"
                checked={formData.isInStock}
                onChange={handleChange}
              />
              Is in stock?
            </label>
          </div>

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
            Add Dish
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMenuForm;
