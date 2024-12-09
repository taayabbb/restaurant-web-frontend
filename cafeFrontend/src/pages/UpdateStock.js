import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/UpdateStock.css";

const UpdateStock = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const item = location.state?.item;
    const [name,setName] = useState(item.ingredientName);
    const [quantity,setQuantity] = useState(item.quantity);
    const [unit,setUnit] = useState(item.unit);
    const [threshold,setThreshold] = useState(item.threshold)
    const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset form data
    const updatedInvItem = {ingredientName: name, quantity, unit, threshold}
    const response = await fetch('http://localhost:5000/api/inventory/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedInvItem),
    })
    const json = await response.json()
    if(!response.ok){
      setError(json.message)
    }
    if(response.ok){
      setError(null)
      navigate('/inventory-management')
    }
  };

  return (
    <div className="update-stock-container">
      <h1 className="update-stock-title">Update Stock</h1>
      <form className="update-stock-form" onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="Enter the Ingredient Name"
          required
          className="update-stock-input"
        />
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter the Quantity"
          required
          className="update-stock-input"
        />
        <input
          type="text"
          value={unit}
          onChange={(e)=>setUnit(e.target.value)}
          placeholder="Enter the Units"
          required
          className="update-stock-input"
        />
        <input
          type="number"
          value={threshold}
          onChange={e => setThreshold(e.target.value)}
          placeholder="The default threshold is 10"
          required
          className="update-stock-input"
        />
        <button type="submit" className="update-stock-button">
          Update Stock
        </button>
      </form>
    </div>
  );
};

export default UpdateStock;
