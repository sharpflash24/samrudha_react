import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ["Maize", "Tomatoes", "Beans"],
        datasets: [
            {
                data: [40, 42, 18], // Percentage values
                backgroundColor: ["#FFB703", "#E63946", "#2A9D8F"],
                hoverBackgroundColor: ["#F4A261", "#D62828", "#1B9C85"],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
        },
    };

    return (
        <div className="pie-chart-container">
            <h3>Crop Distribution</h3>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;
