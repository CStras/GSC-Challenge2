import "./App.css";
import meeedly from "./assets/global_summer_challenge_logo.jfif";
import global from "./assets/meeedly_logo.jfif";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([
    {
      name: "Group A",
      value: 1,
    },
    {
      name: "Group B",
      value: 1,
    },
    {
      name: "Group C",
      value: 1,
    },
    {
      name: "Group D",
      value: 1,
    },
    {
      name: "Group E",
      value: 1,
    },
    {
      name: "Group F",
      value: 1,
    },
  ]);

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#DA2700",
    "#B110F2",
  ];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1.4;
    const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
    const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const addCount = (groupName) => {
    //check if user has voted
    // if true then alert user they already voted
    //if false then
    //setNumber(count + 1);
    //console.log(count);
    setData((prevData) =>
      prevData.map((item) =>
        item.name === groupName ? { ...item, value: item.value + 1 } : item
      )
    );
  };

  /* useEffect(() => {
    // check backend for subject vote data
    // set useState values for each subject from backend data
  }, []); */

  return (
    <div className="app">
      <section className="app__content">
        <img src={meeedly} />
        <img src={global} />
        <h2>What's the best subject?</h2>
        <div className="app__subjects">
          <button
            className="app__subjects_SE"
            onClick={() => addCount("Group A")}
          >
            Software Engineering
          </button>
          <button
            className="app__subjects_BS"
            onClick={() => addCount("Group B")}
          >
            Business Studies
          </button>
          <button
            className="app__subjects_F"
            onClick={() => addCount("Group C")}
          >
            Finance
          </button>
          <button
            className="app__subjects_MS"
            onClick={() => addCount("Group D")}
          >
            Medical Studies
          </button>
          <button
            className="app__subjects_E"
            onClick={() => addCount("Group E")}
          >
            Engineering
          </button>
          <button
            className="app__subjects_P"
            onClick={() => addCount("Group F")}
          >
            Phyiscs
          </button>
        </div>
      </section>
      <div className="app__voteData">
        <ResponsiveContainer aspect={1}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <section className="app_disclaimers">
        <p>
          Disclaimer 1 This program is intended solely for fun and interactive
          engagement. It does not reflect any official academic evaluation.
        </p>
        <p>
          Disclaimer 2 This application is developed as part of the Global
          Summer Challenge organized by Meeedly.
        </p>
      </section>
    </div>
  );
}

export default App;
