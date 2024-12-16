import React from "react";
import "../styles/bookings.css";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";

const feederData = [
  { name: "Palton Bazer", consumers: 17083, energy: 300 },
  { name: "Narengi", consumers: 15038, energy: 250 },
  { name: "Jalukbari", consumers: 18075, energy: 470 },
  { name: "Bhanga Ghar", consumers: 12098, energy: 400 },
  { name: "Hengerabari", consumers: 7234, energy: 150 },
  { name: "Chandmari", consumers: 18483, energy: 450 },
  { name: "Maligaon", consumers: 12334, energy: 400 },
];

const consumerData = [
  { name: "Residential", count: 8, sm: 23000 },
  { name: "Commercial", count: 25, sm: 50000 },
  { name: "Industrial", count: 50, sm: 28000 },
  { name: "Agricultural", count: 13, sm: 15000 },
  { name: "Metro City", count: 13, sm: 112000 },
];

const COLORS = ["#4caf50", "#2196f3", "#ff9800", "#e91e63", "#9c27b0"];

const Bookings = () => {
  return (
    <div className="bookings">
      <div className="booking__wrapper">

        <div className="section">
          <div className="intro">
            <p>
              <strong>Feeder:</strong>  A feeder is a high-voltage power line that connects substations to distribution transformers or directly to large consumers, enabling electricity distribution within a specific area.


            </p>
            <p>
              <strong>Consumer:</strong>  A consumer is an entity or individual receiving electricity from a distribution company (DISCOM) for residential, commercial, industrial, or agricultural purposes.
            </p>
          </div>

          <h2 className="section__title">Consumer Statistics</h2>
          <div className="charts">
            <div className="chart card">
              <h4>Consumers by Subdivision</h4>
              <PieChart width={500} height={300}>
                <Pie
                  data={feederData}
                  dataKey="consumers"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={0}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                >
                  {feederData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>

            <div className="chart card">
              <h4>Energy Distribution (kWh)</h4>
              <BarChart width={500} height={270} data={feederData}>
                <XAxis dataKey="name" angle={-30} textAnchor="end" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="energy" fill="#2196f3" radius={[4, 4, 0, 0]} />
              </BarChart>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section__title">Feeder Statistics</h2>
          <div className="charts">
            <div className="chart card">
              <h4>Feeders by Subdivision</h4>
              <PieChart width={500} height={300}>
                <Pie
                  data={consumerData}
                  dataKey="count"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={0}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                >
                  {consumerData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>

            <div className="chart card">
              <h4>Smart Meter Installation</h4>
              <LineChart width={500} height={300} data={consumerData}>
                <XAxis dataKey="name" angle={-30} textAnchor="end" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sm"
                  stroke="#e91e63"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
