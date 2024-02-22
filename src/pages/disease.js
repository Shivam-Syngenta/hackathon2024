import { Heading, Tooltip } from "@chakra-ui/react";
import React from "react";

export const Diseases = () => {
  return (
    <div
      style={{
        width: "200px",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        marginLeft: "20%",
        border: "5px solid black",
      }}
    >
      <div style={{ fontWeight: 600, fontSize: "24px" }}>Disease Warning</div>
      <div style={{ padding: "2%" }}>
        <Tooltip
          label="Predicted date when lower DD risk threshold is reached"
          placement="left-start"
        >
          <span
            style={{
              width: "180px",
              height: "150px",
              textAlign: "center",
              background: "yellow",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <div>Early Warning</div>
            <div>28 JULY 2023</div>
          </span>
        </Tooltip>
      </div>
      <div style={{ padding: "2%" }}>
        <Tooltip
          label="Predicted date when higher DD risk threshold is reached"
          placement="left-start"
        >
          <div
            style={{
              width: "180px",
              height: "150px",
              textAlign: "center",
              background: "red",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <div>Warning</div>
            <div>28 JULY 2023</div>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};
