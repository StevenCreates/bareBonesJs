import React from "react";
import { CountDisplay } from "./components/CountDisplay";
import { Counter } from "./components/Counter";
import BasicContext from "./utilities/BasicContext";
function App() {
  return (
    <div>
      <BasicContext>
        <CountDisplay />
        <Counter />
      </BasicContext>
    </div>
  );
}

export default App;
