"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
};

const labels = ["", "2020", "2021", "2022", "2023", "2024"];

export const data = {
  labels,
  datasets: [
    {
      label: "Forecast",
      data: [0, 1100, 22000, 34000, 67000, 75000],
      borderColor: "#2e5ce5",
      backgroundColor: "#2e5ce5",
    },
  ],
};

export default function LineChart() {
  return <Line data={data} options={options} />;
}
