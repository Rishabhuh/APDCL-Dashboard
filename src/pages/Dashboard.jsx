import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";
import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const carObj = {
  title: "SubDivisions",
  totalNumber: 158,
  icon: "ri-flashlight-line",
};

const tripObj = {
  title: "Feeders",
  totalNumber: "11KV",
  icon: "ri-plug-line",
};

const clientObj = {
  title: "Consumers",
  totalNumber: "41lakhs",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Alarms Received",
  totalNumber: 2167,
  icon: "ri-timer-flash-line",
};

// Updated Pie chart data for energy usage
const pieData1 = [
  { name: "Residential", value: 45 }, // in percentage
  { name: "Commercial", value: 35 },
  { name: "Industrial", value: 20 },
];

const pieData2 = [
  { name: "Smart Meters", value: 60 },
  { name: "Traditional Meters", value: 40 },
];

const pieData3 = [
  { name: "Energy Saved", value: 25 },
  { name: "Energy Used", value: 75 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChartCard = ({ data, title }) => (
  <div className="pie-chart-card">
    <h4>{title}</h4>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Energy Usage Statistics</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Energy Distribution Statistics</h3>
            <CarStatsChart />
          </div>
        </div>

        <div className="pie-charts-wrapper">
          <PieChartCard data={pieData1} title="Consumer Energy Usage" />
          <PieChartCard data={pieData2} title="Meter Distribution" />
          <PieChartCard data={pieData3} title="Energy Usage Overview" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
