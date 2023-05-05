import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function LineGraph() {

    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "First dataset",
            data: [14, 33, 64, 57, 64, 85],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
          },
          {
            label: "Third dataset",
            data: [23, 38, 40, 50, 34, 70],
            fill: true,
            backgroundColor: "#8B1874",
            borderColor: "#8B1874"
          },
          {
            label: "days",
            data: [15, 24, 34, 40, 64, 89],
            fill: true,
            backgroundColor: "#B71375",
            borderColor: "#B71375"
          },
        ]
      };
      
  return (
    <div style={{width: "100%"}}>
      <Line
        data={lineData}
      />
    </div>
  );
}

export default LineGraph;