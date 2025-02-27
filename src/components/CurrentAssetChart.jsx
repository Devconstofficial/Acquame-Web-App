import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { month: "Jan", debt: 5000 },
  { month: "Feb", debt: 7000 },
  { month: "Mar", debt: 6000 },
  { month: "Apr", debt: 8000 },
  { month: "May", debt: 4000 },
  { month: "Jun", debt: 9000 },
  { month: "Jul", debt: 10000 },
  { month: "Aug", debt: 7500 },
  { month: "Sep", debt: 6700 },
  { month: "Oct", debt: 8800 },
  { month: "Nov", debt: 9300 },
  { month: "Dec", debt: 11000 },
];

const CurrentAssetChart = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h6 className="text-sm font-bold text-start mb-4">Total Debts Per Month</h6>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="debt" className="rounded-top" fill="#00BFD4" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CurrentAssetChart;
