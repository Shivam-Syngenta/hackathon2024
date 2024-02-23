import { Heading, Tooltip } from "@chakra-ui/react";
import React from "react";
import './design.css';
import earlyWarning from '../Assets/Rectangle 488.svg';
import Warning from '../Assets/Rectangle 494.svg';
export const Diseases = ({data}) => {
  console.log(data)
  return (
    <div
      style={{
        height:"100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent:"space-between",
        marginLeft: "10%",
        border: "5px solid black",
        paddingTop:"10%",
        paddingBottom:"10%"
      }}
    >
      <div style={{ fontWeight: 600, fontSize: "24px" }}>Disease Warning</div>
      <div style={{ padding: "2%", height:"40%" }}>
        <Tooltip
          label="Predicted date when lower DD risk threshold is reached"
          placement="left-start"
        >
          <span style={{height:"100%"}}
            className="Warning"
          >
            <div>{data?.early}</div>
            <div style={{display:"flex"}}><img style={{marginRight:"5px"}} src={earlyWarning} alt="error" />Early Warning</div>
          </span>
        </Tooltip>
      </div>
      <div style={{ padding: "2%", height:"40%" }}>
        <Tooltip
          label="Predicted date when higher DD risk threshold is reached"
          placement="left-start"
        >
          <div
            style={{height:"100%"}}
            className="Warning"
          >
            <div>{data?.warning}</div>
            <div style={{display:"flex"}}><img style={{marginRight:"5px"}} src={Warning} alt="error" />Warning</div>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};
