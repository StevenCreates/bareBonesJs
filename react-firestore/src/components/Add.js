import React from "react";
import firebase from "firebase";

const Add = () => {
  const [value, setValue] = React.useState("");
  const db = firebase.firestore();
  const updateValue = (event) => {
    setValue(event.target.value);
  };

  const addValue = () => {
    db.collection("value").add({
      value: value,
    });
  };
  return (
    <>
      <input onBlur={updateValue} type='text' />
      <button onClick={addValue}>Add</button>
    </>
  );
};

export default Add;
