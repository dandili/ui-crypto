import React, { useRef } from "react";
import { Line } from "react-chartjs-2";

function Dashboard({ price, data }) {
    const option = {
        legend: {
            display: false
        },
        tooltips: {
            intersect: false,
            mode: "index"

        },
        responsive: true,
        maintainAspectRatio: true
    };
    if (price === "0.00") {
        return <h2>Select a currency pair</h2>;
    }
    return (
        <div className="chart-container">
            <div className="text-center">
                <h2 className="font-bold">{`£${price}`}</h2>
                <Line data={data} options={option} />
            </div>
        </div>
    );
}

export default Dashboard;