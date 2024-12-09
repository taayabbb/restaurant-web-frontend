import React, { useState } from "react";
import styles from "../styles/addMenuForm.module.css"; // Import CSS module

const SpecialDishMgt = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [imgPath, setImgPath] = useState('')
  const [isSpecial,setIsSpecial] = useState(true);
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add the logic to submit the form data
    const menuItem = {name , price , category, description, imgPath, isSpecial};
    const response = await fetch('http://localhost:5000/api/menu/add',{
      method: 'POST',
      body: JSON.stringify(menuItem),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    if(!response.ok){
      setError(json.error)
    }
    if(response.ok){
      setError(null)
      setPrice('')
      setCategory('')
      setDescription('')
      setName('')
      setImgPath('')
    }
  };

  return (
    <div className={styles['adddish-page']}> {/* Correct class name application */}
      <div className={styles['adddish-form-container']}> {/* Correct class name application */}
        <h2 className={styles.heading}>Adding Special Dish</h2>
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
            Add Price:
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={styles.input}
            required
          />
          <label className={styles.label}>
            Add Category:
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={styles.input}
            required
          />
          <label className={styles.label}>
            Add Image URL:
          </label>
          <input
            type="text"
            value={imgPath}
            onChange={(e) => setImgPath(e.target.value)}
            className={styles.input}
            required
          />

          <label className={styles.label}>
            Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.textarea}
            required
          ></textarea>


          {/* <label htmlFor="picture" className={styles.label}>
            Upload Picture:
          </label>
          <input
            type="file"
            id="picture"
            name="picture"
            accept="image/*"
            className={styles.fileInput}
            onChange={handleChange}
          /> */}

          <button type="submit" className={styles.button}>
            Add Dish
          </button>
          {error && <div className={styles.label} >{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default SpecialDishMgt;
