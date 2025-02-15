import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ["Maize", "Wheat", "Rice", "Barley", "Soybean"],
        datasets: [
            {
                data: [12, 30, 40, 10, 8], // Percentage values
                backgroundColor: ["rgb(10, 224, 106)", "rgb(104, 252, 121)", "rgb(100, 201, 94)", "rgb(208, 250, 81)", "rgb(7, 252, 36)"],
                hoverBackgroundColor: ["rgb(13, 237, 114)", "rgb(113, 248, 129)", "rgb(112, 222, 106)", "rgb(211, 249, 96)", "rgb(17, 253, 44)"],
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
