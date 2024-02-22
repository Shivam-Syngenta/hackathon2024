import {
  FormControl,
  FormLabel,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Form, FormComponent } from "./form";
import { Button } from "antd";
import { Graph } from "./Graph";
import { Diseases } from "./disease";

export const FirstPage = () => {
  const [data, setData] = useState();
  return (
    <div
      style={{
        height: "80%",
        width: "100%",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "24%",
          border: "4px solid grey",
          background: "var(--Neutral-neutral-00, #FFF)",
          marginLeft:"6vw",
          borderRadius:"10px"
        }}
      >
        <div>
          <div
            style={{
              padding: "10px",
              borderRadius: "5px"
            }}
          >
            <FormComponent setData={setData} />
          </div>
        </div>
        <div></div>
      </div>
      <div
        style={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {data ? (
          <div style={{ display: "flex", height:"100%", width:"100%" }}>
            <div>
              <Graph data={data} />
            </div>
            <div style={{ height:"97%", width:"30%" }}>
              <Diseases />
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
