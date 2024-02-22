import React from "react";
import {
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";
import data from "../data/data.json";
export const Graph = () => {
  return (
    <div className="cdd_output_graph_container">
      <ComposedChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tickMargin={0} minTickGap={20} />
        <YAxis />
        <ReferenceLine
          type="monotone"
          x={"Page C"}
          stroke="red"
          strokeDasharray="5 5"
        />
        <Line
          name="pv of pages"
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
        />
      </ComposedChart>
    </div>
  );
};
