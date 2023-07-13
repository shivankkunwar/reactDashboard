import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Basic Trees', value: 50 },
  { name: 'Custom Short Pants', value: 30 },
  { name: 'Super Hoodies', value: 20 },
];

const COLORS = ['#98D89E', '#EE8484', '#F6DC7D'];

const CustomPieChart = () => {
  return (
    <div style={{ width: '100px', height: '100px' }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={50}
            fill="#8884d8"
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;