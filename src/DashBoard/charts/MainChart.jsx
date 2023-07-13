import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '',
    uv: 400,
    pv: 240,
    amt: 240,
  },
  {
    name: 'Week 1',
    uv: 300,
    pv: 139,
    amt: 221,
  },
  {
    name: 'Week 2',
    uv: 200,
    pv: 980,
    amt: 229,
  },
  {
    name: 'Week 3',
    uv: 278,
    pv: 390,
    amt: 200,
  },
  {
    name: 'Week 4',
    uv: 189,
    pv: 480,
    amt: 218,
  }
 
];

const MainChart = () => {
  return (
    <div >
    <div>
      <h2 style={{marginBottom:'0px',marginLeft:'40px'}}>Activities</h2>
      <select style={{marginBottom:'15px',marginLeft:'40px',border:'none',color:"#858585"}}>
        <option>May-June 2023</option>
        <option>July-August 2023</option>
        {/* Add more options for different month groups */}
      </select>
    </div>
    <div>
      <ResponsiveContainer width="95%" height={200}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line name="Guest" type="monotone" dataKey="pv" stroke="orange" activeDot={{ r: 8 }} />
          <Line name="User" type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);
    
 
};

export default MainChart;
