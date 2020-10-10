import React from "react";
import firebase from "firebase";

const Update = ({ doc }) => {
  const [value, setValue] = React.useState("");
  const db = firebase.firestore();
  const updateValue = (event) => {
    setValue(event.target.value);
  };

  const updateFirestore = () => {
    db.collection("values")
      .doc(doc)
      .update({
        value: value,
      })
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  };

  return (
    <>
      <input onClick={updateValue} type='text' />
      <button onClick={updateFirestore}>Update</button>
    </>
  );
};

export default Update;
