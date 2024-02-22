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
import { DatePicker } from "@orange_digital/chakra-datepicker";
import React, { useState } from "react";
import { Form, FormComponent } from "./form";
import { Button } from "antd";
import { Graph } from "./Graph";
import { Diseases } from "./disease";

export const FirstPage = () => {
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
      <div style={{ width: "20%" }}>
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
            <FormComponent />
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
          <div style={{ margin: "auto", display: "flex" }}>
            <div>
              <Graph />
            </div>
            <div>
              <Diseases />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
