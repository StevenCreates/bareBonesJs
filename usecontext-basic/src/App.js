import React from "react";
import HooksExample1 from "./pages/HooksExample1";
import BasicContext from "./utilities/BasicContext";

function App() {
  return (
    <div>
      <BasicContext>
        <HooksExample1 />
      </BasicContext>
    </div>
  );
}

export default App;
