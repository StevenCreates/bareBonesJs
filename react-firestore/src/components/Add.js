import React from "react";
import firebase from "firebase";

const Add = () => {
  const [value, setValue] = React.useState("");
  const db = firebase.firestore();
  const updateValue = (event) => {
    setValue(event.target.value);
  };

  const addValue = () => {
    db.collection("values")
      .doc(value)
      .set({
        value: value,
      })
      .then(function () {
        console.log("Value successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing Value: ", error);
      });
  };

  const valueStyle = {
    width: "full",
    textAlign: "center",
    fontSize: "16px",
  };

  return (
    <div style={valueStyle}>
      <input onBlur={updateValue} type='text' />
      <button onClick={addValue}>Add</button>
    </div>
  );
};

export default Add;
