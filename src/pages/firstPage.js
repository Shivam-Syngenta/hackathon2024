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
  const [data, setData] = useState()
  return (
    <div
      style={{
        height: "80%",
        width: "100%",
        display: "flex",
        padding: "10px",
        marginTop: "5vh"
      }}
    >
      <div style={{ width: "24%", border:"4px solid grey", background:"var(--Neutral-neutral-00, #FFF)" }}>
        <div>
          <Heading as="h2" size="2xl">
            Input
          </Heading>
          <div
            style={{
              marginTop: "10vh",
              padding: "10px",
              borderRadius: "5px",
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
        <Heading as="h2" size="2xl">
          Output
        </Heading>
        <div style={{ marginTop: "5vh" }}>
        {data?(<div style={{ margin: "auto", display: "flex" }}>
            <div>
              <Graph data={data} />
            </div>
            <div>
              <Diseases />
            </div>
          </div>):(<div><Heading>Enter input to view Result</Heading></div>)}
          
        </div>
      </div>
    </div>
  );
};
