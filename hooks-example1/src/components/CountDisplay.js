import React from "react";
import { BasicContext } from "../utilities/BasicContext";

export function CountDisplay() {
  const [count] = React.useContext(BasicContext);
  return <div>The current count of clicks are {count}</div>;
}
