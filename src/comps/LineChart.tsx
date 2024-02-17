"use client";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
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
  TimeScale,
  Title,
  Tooltip,
  Legend
);

const labels = ["", "2020", "2021", "2022", "2023", "2024"];
// const labels = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

export const data = {
  labels,
  datasets: [
    {
      label: "Forecast",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "#2e5ce5",
      backgroundColor: "#2e5ce5",
      pointStyle: "circle",
      pointRadius: 1,
      pointHoverRadius: 5,
      lineTension: 0.1,
    },
  ],
};

interface LineChartProps {
  isShowXMarking?: boolean;
  isShowYMarking?: boolean;
}

const LineChart: React.FC<LineChartProps> = ({
  isShowXMarking = true,
  isShowYMarking = true,
}) => {
  const DISPLAY = true;
  const CHART_AREA = true;
  const TICKS = true;

  const options = {
    interaction: {
      intersect: false,
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: !DISPLAY,
        },
        display: isShowXMarking,
        ticks: {
          display: true,
          color: "rgb(214, 223, 246)",
          font: {
            size: 15,
            lineHeight: 1.2,
            font: "Monopace",
          },
        },
      },
      y: {
        grid: {
          display: DISPLAY,
          drawTicks: TICKS,
          drawOnChartArea: CHART_AREA,
          borderDash: [2, 1],
          color: "rgb(244, 246, 253)",
          lineWidth: 2,
        },
        display: isShowYMarking,
        ticks: {
          display: true,
          color: "rgb(214, 223, 246)",
          font: {
            size: 15,
            lineHeight: 1.2,
            font: "Monopace",
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
