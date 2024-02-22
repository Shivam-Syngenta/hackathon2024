import { useState } from "react";
import "./App.css";
import { Banner } from "./pages/banner";
import { FirstPage } from "./pages/firstPage";
import { ChakraProvider } from "@chakra-ui/react";
import { Info } from "./pages/info";
import { Button } from "antd";
function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <ChakraProvider>
      <div
        className="App"
        style={{ height: "100vh", width: "100vw", background:"#f3f4f6", display:"flex", flexDirection:"column", justifyContent:"space-evenly" }}
      >
        <div>
          <Banner />
          {/* <Button
            style={{ position: "absolute", left: "2vw", top: "10vh" }}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "Prediction" : "Information"} */}
          {/* </Button> */}
        </div>
        {/* {toggle ? <Info /> : } */}
        <FirstPage />
      </div>
    </ChakraProvider>
  );
}

export default App;
