import React from "react";
import firebase from "firebase";
import Delete from "./Delete";
import { useGetData } from "../hooks/useGetData";
import Update from "./Update";

const FireStoreData = () => {
  const [values] = useGetData();

  return (
    <div>
      <span>Values</span>
      {values.map((value) => (
        <div key={value.value}>
          <div>{value.value}</div>
          <Delete doc={value.value} />
          <Update doc={value.value} />
        </div>
      ))}
    </div>
  );
};

export default FireStoreData;
