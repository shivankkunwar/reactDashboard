import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Chart = () => {
  
  const Apidata = [
    {
      name: '',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Week 1',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Week 2',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Week 3',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Week 4',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    }
   
  ];
  const [data, setData] = useState(Apidata);

//   useEffect(() => {
//     // Fetch data from API
//     fetch('https://api.example.com/chart-data')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.log(error));
//   }, []);

  return (
    <div>
      <div>
        <h2>Names Activities</h2>
        <select>
          <option>May-June 2023</option>
          <option>July-August 2023</option>
          {/* Add more options for different month groups */}
        </select>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis interval={100} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="guest" name="Guest" stroke="#ffa500" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="user" name="User" stroke="#00ff00" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;