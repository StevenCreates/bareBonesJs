import React from "react";
import firebase from "firebase";

export const useGetData = () => {
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
  return [values];
};
