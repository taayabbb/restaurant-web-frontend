import React, { useEffect, useState } from "react";
import "../styles/AdminDashboard.css";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { color } from "chart.js/helpers";
Chart.register(...registerables);
const Dashboard = () => {
  const dailySales = 450;
  // Data for Bar Chart (Daily Orders)
  const barData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"],
    datasets: [
      {
        label: "Daily Orders",
        data: [10, 20, 15, 25, 35,65,34],
        backgroundColor: "rgba(161, 62, 20, 0.6)",  // Applying the color you mentioned
        borderColor: "rgba(161, 62, 20, 1)",
        borderWidth: 1,
      },
    ],
  };
  // Data for Pie Chart (Reservation Types)
  const pieData = {
    labels: ["Indoor", "Outdoor", "Private Room"],
    datasets: [
      {
        label: "Reservation Types",
        data: [7, 3, 2],//for now dummy data 
        backgroundColor: [
         "rgba(161, 62, 20, 0.6)", // Adjusting color for the pie chart
        "rgba(162, 62, 20, 0.10)",
        "rgba(255, 206, 86, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Data for Line Chart (Daily Sales)
  const lineData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"],
    datasets: [
      {
        label: "Daily Sales ($)",
        data: [300, 400, 350, 450, 500,600,600],
        fill: true,
        borderColor: "rgba(161, 62, 20, 1)",  // Applying the color here as well
        backgroundColor: "rgba(161, 62, 20, 0.2)",
      },
    ],
  };

  // Options for Animations
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels:{
            color: "rgba(255, 255, 255, 1)",
            font:{
                font:'Times New Roman',
            }
        }
      },
      tooltip: {
        enabled: true,
      },
    },
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
    scales: {
        x: {
          ticks: {
            color: "rgba(255, 255, 255, 1)"
          },
        },
        y: {
          ticks: {
            color: "rgba(255, 255, 255, 1)"
          },
        },
      },
  };


  const [ordersCount , setOrdersCount] = useState();
  const [reservationCount , setReservationCount] = useState();
  useEffect( () => {
    const fetchOrdersCount = async () => {
      const response = await fetch('http://localhost:5000/api/order/order-count');
      const json = await response.json()
      if(response.ok){
        setOrdersCount(json.todayOrders)
      }
    }
    fetchOrdersCount()
  }, [])
  useEffect( () => {
    const fetchReservationCount = async () => {
      const response = await fetch('http://localhost:5000/api/reservation/count-reservations');
      const json = await response.json()
      if(response.ok){
        setReservationCount(json.todayReservations)
      }
    }
    fetchReservationCount()
  }, [])
  
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>------LA-MONTANA RESTAURANT------</h1>
        <h3>Welcome to the Admin Dashboard</h3>
      </header>

      <section className="metrics">
        <div className="metric-card">
          <h2>All time Orders</h2>
          <p>{ordersCount}</p>
          <p className="description">
            This represents the number of orders placed all time. Monitoring orders helps us understand customer demand and adjust staffing levels accordingly.
          </p>
        </div>
        <div className="metric-card">
          <h2>Reservations</h2>
          <p>{reservationCount}</p>
          <p className="description">
            This indicates the number of reservations made all time. Tracking reservations helps manage seating arrangements and predict customer traffic.
          </p>
        </div>
        <div className="metric-card">
          <h2>Daily Sales</h2>
          <p>${dailySales}</p>
          <p className="description">
            This represents the total sales revenue generated today. It is a key performance indicator of business health and profitability.
          </p>
        </div>
      </section>

      <section className="charts">
        <div className="chart-container">
          <Bar data={barData} options={chartOptions} />
        </div>
        <div className="chart-container">
          <Pie data={pieData} options={chartOptions} />
        </div>
        <div className="chart-container">
          <Line data={lineData} options={chartOptions} />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
