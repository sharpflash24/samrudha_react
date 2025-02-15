import React from "react";
import "./dashboard.css";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import PieChart from "./PieChart";

const Dashboard = () => {
  const yieldData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Yield (kg)",
        data: [1200, 1500, 1300, 1600, 1800, 2100, 2300, 2500, 2400, 2200, 2000, 1900],
        borderColor: "green",
        backgroundColor: "rgba(0, 128, 0, 0.2)",
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="top-section">
        {/* <div className="weather-box">
          <h3>Current Weather</h3>
          <table>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Temperature</td>
                <td>25°C</td>
              </tr>
              <tr>
                <td>Wind Speed</td>
                <td>12 km/h</td>
              </tr>
            </tbody>
          </table>
        </div> */}
        <div className="info-box">
          <h3>Rainfall</h3>
          <p>75 mm</p>
        </div>
        <div className="info-box">
          <h3>Humidity</h3>
          <p>68%</p>
        </div>
        <div className="info-box">
          <h3>Wind Speed</h3>
          <p>12 km/h</p>
        </div>
      </div>

      {/* <div className="middle-section">
        <div className="rainfall-box">
          <h3>Current Rainfall Status & Wind Speed</h3>
          <p>Rainfall: 75 mm</p>
          <p>Wind Speed: 12 km/h</p>
        </div>
      </div> */}

      <div className="bottom-section">
        <div className="table-box">
          <h3>Minimum Support Price (MSP) of Crops</h3>
          <table>
            <thead>
              <tr>
                <th>Crop</th>
                <th>MSP (₹ per quintal)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wheat</td>
                <td>2,125</td>
              </tr>
              <tr>
                <td>Rice</td>
                <td>2,100</td>
              </tr>
              <tr>
                <td>Maize</td>
                <td>1,850</td>
              </tr>
              <tr>
                <td>Barley</td>
                <td>1,735</td>
              </tr>
              <tr>
                <td>Soybean</td>
                <td>3,950</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="dashboard-section">
            <PieChart />  {/* Add Pie Chart inside the Dashboard */}
        </div>
        </div>
        <div className="graph-box">
            <h3>Yield vs Time</h3>
            <Line data={yieldData} />
        </div>
    </div>
  );
};

export default Dashboard;
