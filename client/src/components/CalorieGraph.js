import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CalorieGraph = ({ calories, dates, weights }) => {
  const data = dates.map((date, index) => ({
    date,
    calories: calories[index],
    weight: weights[index],
  })).sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="calories" stroke="#8884d8" name="Calories" />
        <Line type="monotone" dataKey="weight" stroke="#82ca9d" name="Weight" />
      </LineChart>
    </ResponsiveContainer>
  );
};


export default CalorieGraph;



