import React from "react";
import firebase from "firebase";
import Delete from "./Delete";

const FireStoreData = () => {
  const [values, setValues] = React.useState([]);
  const db = firebase.firestore();

  React.useEffect(() => {
    db.collection("values")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setValues(data); // array of values
      });
  }, [db]);

  return (
    <div>
      <span>Values</span>
      {values.map((value) => (
        <div key={value.value}>
          <div>{value.value}</div>
          <Delete doc={value.value} />
        </div>
      ))}
    </div>
  );
};

export default FireStoreData;
