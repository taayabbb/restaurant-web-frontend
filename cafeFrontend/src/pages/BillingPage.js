import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js"
import "../styles/BillingPage.css"; // Import the CSS file

const BillingPage = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const reservation = location.state?.reservation;
    const [cardInfo, setCardInfo] = useState()
    const [email,setEmail] = useState('');
    const [error,setError] = useState('');   

    const updateReservation = async () => {
        const response = await fetch('http://localhost:5000/api/reservation/' + reservation._id + '/confirm',{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({})
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error);
        } else {
            setError(null)
        }
    }
    const makePayment = async () => {
        const stripe = await loadStripe('pk_test_51QTomXG6l0iru7NuVcYMhG5f5aEOB4vUlyQfyNhfns8eT20dj4MmhMlxyfeEOAXPQPLz5XBSQbovjMY6CUTqIS2x00NOQQMWEl')
        const items = reservation.order.items;
        const response = await fetch('http://localhost:5000/api/payment/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(items)
        })
        const json = await response.json();
        if(!response.ok){
            setError(json.error);
            console.log(json.error)
        } 
        if(response.ok) {
            setError(null)
            window.location.href = json.url
        }
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reservation submission (e.g., save the data or send a request)
    updateReservation()
    makePayment()
  };

  return (

    <div className="reserve-table-container">
      <h1 className="reserve-table-title">Payment Processing</h1>
      <form className="reserve-table-form" onSubmit={handleSubmit}>
        <label>Customer Name: {reservation.customer.name}</label>  
      <label >Price: {reservation.order.totalAmount}</label>
      <label>Reservation Id: {reservation._id}</label>
        <input
          value={cardInfo}
          onChange={(e) => setCardInfo(e.target.value)}
          placeholder="Enter card info"
          required
          min="1"
          className="form-input"
        />
        <input
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          placeholder="Enter Email"
          required
          className="form-input"
        />
        <button type="submit" className="form-submit-button">
          Generate Bill
        </button>
        <button type="submit" className="form-submit-button">
          COD
        </button>
        {error && <div>error</div>}
      </form>
    </div>
  );
};

export default BillingPage;
