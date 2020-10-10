import React from "react";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Remove from "./components/Remove";

function App() {
  return (
    <div>
      <span>Basic FireStore App</span>
      <Add />
      <Edit />
      <Remove />
    </div>
  );
}

export default App;
