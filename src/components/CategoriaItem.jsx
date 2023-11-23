import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

import CardItem from "./ItemListContainer/CardItem";

const CategoriaItem = () => {
  const [item, setItemData] = useState([]);
  

  const { categoria } = useParams(); 

  useEffect(() => {
    const getItem = async () => {
      const q = query(
        collection(db, "items"),
        where("categoria", "==", categoria)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const itemData = { ...doc.data(), id: doc.id };
        console.log("Item data:", itemData);
        docs.push(itemData);
      });
      setItemData(docs);
    };
    getItem();
  }, [categoria]);

  return (
    <div >
      {item.map((item) => {
        return (
          <div key={item.id}>
            <CardItem
             item={item} key={item.id} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoriaItem;
