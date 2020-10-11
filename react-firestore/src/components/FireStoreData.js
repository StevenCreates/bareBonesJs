import React from "react";
import firebase from "firebase";
import Delete from "./Delete";
import { useGetData } from "../hooks/useGetData";
import Update from "./Update";

const FireStoreData = () => {
  const [documents] = useGetData();

  const valueStyle = {
    width: "full",
    textAlign: "center",
    fontSize: "16px",
  };

  return (
    <div style={valueStyle}>
      <span>Values</span>
      {documents.map((documents) => (
        <div key={documents.id}>
          <div style={valueStyle}>
            Document: {documents.id} Value: {documents.value.value}
          </div>
          <Delete doc={documents.id} />
          <Update doc={documents.id} />
        </div>
      ))}
    </div>
  );
};

export default FireStoreData;
