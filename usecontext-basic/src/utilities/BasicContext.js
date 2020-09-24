import React from "react";
export const BasicContext = React.createContext();

export default (props) => {
  const [count, setCount] = React.useState(0);
  const value = [count, setCount];
  return <BasicContext.Provider value={value} {...props} />;
};
