import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Graph = ({ calories, dates }) => {
  const data = [];

  // Sorting dates in ascending order
  const sortedData = [...dates].sort((a, b) => new Date(a) - new Date(b));

  // Aligning calories with sorted dates
  for (let i = 0; i < sortedData.length; i++) {
    const dateIndex = dates.indexOf(sortedData[i]);
    const calorie = dateIndex !== -1 ? calories[dateIndex] : 0;
    data.push({ date: sortedData[i], calories: calorie });
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="calories" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
