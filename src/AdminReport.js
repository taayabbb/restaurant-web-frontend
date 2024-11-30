//this page/file will consist of 
//1-most sold items 
//2-profits 
//3-revenues 
//4-reviews of suctomers
//thats all 
import React, { useState } from 'react';
import './AdminReport.css';

const AdminReport = () => {
  const [data] = useState({
    mostSoldItems: [],
    profits: 0,
    revenues: 0,
    orderHistory: [],
    salesLastTenYears: [
        { year: 2014, sales: 120000 },
        { year: 2015, sales: 150000 },
        { year: 2016, sales: 175000 },
        { year: 2017, sales: 200000 },
        { year: 2018, sales: 220000 },
        { year: 2019, sales: 250000 },
        { year: 2020, sales: 300000 },
        { year: 2021, sales: 350000 },
        { year: 2022, sales: 400000 },
        { year: 2023, sales: 450000 },
      ],
  });
  const [activeSection, setActiveSection] = useState('mostSoldItems');
  const renderSection = () => {
    switch (activeSection) {
      case 'mostSoldItems':
        return (
          <div>
            <h2>Most Sold Items</h2>
            <ul>
              {data.mostSoldItems.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.quantity} sold
                </li>
              ))}
            </ul>
          </div>
        );
      case 'profits':
        return (
          <div>
            <h2>Profits</h2>
            <p>Total Profits: ${data.profits}</p>
          </div>
        );
      case 'revenues':
        return (
          <div>
            <h2>Revenues</h2>
            <p>Total Revenues: ${data.revenues}</p>
          </div>
        );
      case 'orderHistory':
        return (
          <div>
            <h2>Order History</h2>
            <ul>
              {data.orderHistory.map((order, index) => (
                <li key={index}>
                  {order.date} - {order.itemName} - ${order.totalPrice}
                </li>
              ))}
            </ul>
          </div>
        );
      case 'highestSales':
        return (
          <div>
            <h2>Highest Sales in the Last 10 Years</h2>
            <ul>
              {data.salesLastTenYears.map((record, index) => (
                <li key={index}>
                  Year: {record.year}, Sales: {record.sales}.
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return <p>Select a section to view details.</p>;
    }
  };

  return (
    <div className="admin-report-container">
      <div className="sidebar">
        <button onClick={() => setActiveSection('mostSoldItems')}>Most Sold Items</button>
        <button onClick={() => setActiveSection('profits')}>Profits</button>
        <button onClick={() => setActiveSection('revenues')}>Revenues</button>
        <button onClick={() => setActiveSection('orderHistory')}>History of Orders</button>
        <button onClick={() => setActiveSection('highestSales')}>Highest Sales in Years</button>
      </div>
      <div className="content">{renderSection()}</div>
    </div>
  );
};

export default AdminReport;
