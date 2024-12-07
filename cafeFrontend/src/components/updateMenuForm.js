import React, { useState  } from "react";
import { useLocation } from "react-router-dom";
import styles from "../styles/addMenuForm.module.css"; // Import CSS module

const UpdateMenuForm = () => {

  const location = useLocation();
  // const navigate = useNavigate();

  // Retrieve dish details from location state
  const dish = location.state?.dish;
  const [name, setName] = useState(dish.name)
  const [price, setPrice] = useState(dish.price)
  const [category, setCategory] = useState(dish.category)
  const [description, setDescription] = useState(dish.description)
  const [imgPath, setImgPath] = useState(dish.imgPath)
  const [isSpecial,setIsSpecial] = useState(dish.isSpecial);
  const [error, setError] = useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add the logic to submit the form data
    const updatedMenuItem = {name, price, description, category, isSpecial ,imgPath}
    const response = await fetch('http://localhost:5000/api/menu/update/' + dish._id,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedMenuItem),
    })
    const json = await response.json()
    if(!response.ok){
      setError(json.message)
    }
    if(response.ok){
      setError(null)
      alert(json.message)   
    }
  };

  if (!location.state?.dish) {
    return <div>Error: Dish information is missing.</div>;
  }
  return (
    <div className={styles['adddish-page']}> {/* Correct class name application */}
      <div className={styles['adddish-form-container']}> {/* Correct class name application */}
        <h2 className={styles.heading}>Updating Dish</h2>
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

          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="isSpecial"
                checked={isSpecial}
                onChange={(e) => {if(isSpecial === true)setIsSpecial(false); else setIsSpecial(true)}}
              />
              Is the Dish Special?
            </label>
          </div>
          <button type="submit" className={styles.button}>
            Update Dish
          </button>
          {error && <div className={styles.label} >{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default UpdateMenuForm;
