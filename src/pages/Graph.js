import React from "react";
import {
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceLine,
  XAxis,
  Tooltip,
  YAxis,
} from "recharts";
import data from "../data/data.json";
export const Graph = (data) => {
  console.log(data)
  return (
    <div className="cdd_output_graph_container" style={{alignContent:"center", height:"100%", margin:"auto"}}>
      <ComposedChart
        width={600}
        height={400}
        data={data.data.curveData}
        margin={{
          top: 20,
          right: 0,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" tickMargin={0} minTickGap={20} />
        <YAxis dataKey="state" type="category"/>
        <Tooltip />
        <Line
          type="monotone"
          dot={{ stroke: "#0092E4", strokeWidth: 6 }}
          dataKey="state"
          stroke="#0092E4"
        />
        <ReferenceLine
          type="monotone"
          x={data?.data?.harvest}
          stroke="green"
          strokeDasharray="5 5"
        />
      </ComposedChart>
    </div>
  );
};
