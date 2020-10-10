import React from "react";
import firebase from "firebase";

const FireStoreData = () => {
  const [values, setValues] = React.useState([]);
  const db = firebase.firestore();

  React.useEffect(() => {
    db.collection("value")
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
        <div key={value.value}>{value.value}</div>
      ))}
    </div>
  );
};

export default FireStoreData;
