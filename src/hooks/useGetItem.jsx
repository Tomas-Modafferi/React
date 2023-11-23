import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, query, where, getDocs, doc, documentId } from "firebase/firestore";

const useGetItem = ( id ) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
    console.log(id)
  useEffect(() => {
    const getItems = async () => {
      const q = query(
        collection(db, "items"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
         querySnapshot.forEach((doc) => {
         docs.push({ ...doc.data(), id: doc.id });
       });
         setItem(docs);
         setLoading(false)
    };
    getItems();
  }, [id]);
  return {
    item,
    loading,
  };
};

export default useGetItem;
