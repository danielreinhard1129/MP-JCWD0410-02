"use client";
import { ResponsivePie } from "@nivo/pie";
import React from "react";

interface PeiChartProps {
  usersByMonth: { [key: number]: number };
}

const PeiChart: React.FC<PeiChartProps> = ({ usersByMonth }) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const chartData = Object.entries(usersByMonth).map(([monthIndex, count]) => ({
    id: monthNames[parseInt(monthIndex, 10)],
    value: count,
  }));
  return (
    <div className="w-full h-[300px]">
      <ResponsivePie
        data={chartData}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
};

export default PeiChart;