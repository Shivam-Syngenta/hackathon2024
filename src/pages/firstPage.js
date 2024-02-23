import { Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { Form, FormComponent } from "./form";
import { Button } from "antd";
import { Graph } from "./Graph";
import { Diseases } from "./disease";
import { generateGraphData } from "../methods";
export const FirstPage = () => {
  const [data, setData] = useState();
  return (
    <div
      style={{
        height: "80%",
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          width: "24%",
          border: "4px solid grey",
          background: "var(--Neutral-neutral-00, #FFF)",
          borderRadius: "10px",
        }}
      >
        <div>
          <div
            style={{
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                fontWeight: 600,
                marginBottom: "5vh",
                color: "white",
                background: "grey",
              }}
            >
              Input
            </div>
            <div style={{ padding: "10px" }}>
              <FormComponent setData={setData} />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "65%",
          display: "flex",
          flexDirection: "column",
          border: "5px solid grey",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            color: "white",
            background: "grey",
            marginBottom: "15px",
          }}
        >
          Output
        </div>
        {data ? (
          <div style={{ display: "flex", height: "100%", width: "100%" }}>
            <div>
              <Graph data={data} />
              <div
                style={{
                  border: "2px solid black",
                  borderRadius: "10%",
                  fontSize: "20px",
                  textAlign: "center",
                  minWidth: "300px",
                  marginTop:"-20vh",
                  marginLeft:"3vw",
                  padding:"10px"
                }}
              >
                <div>Optimal Harvest Date</div>
                <div> {generateGraphData(data)?.harvest}</div>
              </div>
            </div>
            <div style={{ height: "97%", width: "30%" }}>
              <Diseases data={data} />
            </div>
          </div>
        ) : (
          <div>
            <Heading>Enter input to view Result</Heading>
          </div>
        )}
      </div>
    </div>
  );
};
