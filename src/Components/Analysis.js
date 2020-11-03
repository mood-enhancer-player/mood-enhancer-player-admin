import React, { useEffect } from "react";
import Chart from "chart.js";

const Analysis = ({ playCount, songName }) => {
  console.log(playCount, songName);
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: songName,
        datasets: [
          {
            label: "Top Trending Music",
            data: playCount,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  });
  return (
    <div className="App">
      <canvas id="myChart" width="600" height="250" />
    </div>
  );
};

export default Analysis;
