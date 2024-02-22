import { Heading } from "@chakra-ui/react";
import React from "react";
import banner from "../Assets/wallace_logo.jpeg";
export const Banner = () => {
  return (
    <div style={{ height: "20%", width: "100%", textAlign: "center", display:"flex", justifyContent:"center" }} >
      <img src={banner} alt="error" style={{width:"100px", height:"100px" , border:"5px solid black", marginRight:"5vw"}}/>
      <Heading as="h1" size="4xl" noOfLines={1}>
        wallace.agro
      </Heading>
    </div>
  );
};
