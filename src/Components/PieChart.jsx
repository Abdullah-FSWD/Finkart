import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({ label, mission }) => {
  console.log("lable", label, "mission", mission);
  const data = {
    labels: label,
    datasets: [
      {
        label: "# of Successfull Mission",
        data: mission,
        backgroundColor: [
          "rgba(255, 0, 0, 0.2)",
          "rgba(0, 255, 0, 0.2)",
          "rgba(255, 255, 0, 0.2)",
          "rgba(255, 0, 255, 0.2)",
          "rgba(0, 255, 255, 0.2)",
          "rgba(128, 128, 128, 0.2)",
          "rgba(255, 165, 0, 0.2)",
          "rgba(0, 128, 0, 0.2)",
          "rgba(128, 0, 128, 0.2)",
          "rgba(0, 128, 128, 0.2)",
          "rgba(255, 150, 100, 0.2)",
        ],
        borderColor: [
          "rgba(255, 0, 0, 1)",
          "rgba(0, 255, 0, 1)",
          "rgba(255, 255, 0, 1)",
          "rgba(255, 0, 255, 1)",
          "rgba(0, 255, 255, 1)",
          "rgba(128, 128, 128, 1)",
          "rgba(255, 165, 0, 1)",
          "rgba(0, 128, 0, 1)",
          "rgba(128, 0, 128, 1)",
          "rgba(0, 128, 128, 1)",
          "rgba(255, 150, 100, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
};
