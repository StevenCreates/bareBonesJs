import React from "react";
import { BasicContext } from "../utilities/BasicContext";

export function Counter() {
  const [, setCount] = React.useContext(BasicContext);
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>Click Me to Increase</button>;
}
