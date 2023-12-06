import React, { useState } from "react";

import Navbar from "./HomeComponent/Navbar";
import StorecodeSearchBar from "./HomeComponent/StorecodeSearchBar";
import GetCode from "./HomeComponent/GetCode";

function Home() {
  return (
    <div className="">
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          background: "white",
        }}
      ></div>
      <div>
        <Navbar />
      </div>
      <div>
        <StorecodeSearchBar />
      </div>
      <div>
        <GetCode />
      </div>
    </div>
  );
}

export default Home;
