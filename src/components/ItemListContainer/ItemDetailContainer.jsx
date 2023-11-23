import React from 'react'
import useGetItem from '../../hooks/useGetItem'
import { useParams } from 'react-router-dom'
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import CardItem from './CardItem';


const ItemDetailContainer = () => {
  const {id} = useParams()
  const{item, loading} = useGetItem(id)

  return (
    <div>
      {item.map((data) =>{
        return <CardItem item={data} key={data.id}/>
      })}
    </div>
  )
}

export default ItemDetailContainer
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";


// // FIREBASE
// import { db } from "../../firebase/firebaseConfig";
// import {
//   collection,
//   query,
//   getDocs,
//   where,
//   documentId,
// } from "firebase/firestore";

// // COMPONENTS
// import CardItem from "./CardItem";

// const ItemDetailContainer = () => {
//   const [itemsData, setItemsData] = useState([]);

//   const { id } = useParams();

//   useEffect(() => {
//     const getItems = async () => {
//       const q = query(
//         collection(db, "items"),
//         where(documentId(), "==", id)
//       );
//       const docs = [];
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc) => {
//         docs.push({ ...doc.data(), id: doc.id }); 
//       });
//       setItemsData(docs);
//     };
//     getItems();
//   }, [id]);

//   return (
//     <div className="ItemDetailContainer">
//       {itemsData.map((items) => {
//         return <CardItem items={items} key={items.id} />;
//       })}
//     </div>
//   );
// };

// export default ItemDetailContainer;


// import React , {useState, useEffect}from 'react'
// import useGetItem from '../../hooks/useGetItem'
// import { useParams } from 'react-router-dom'
// import { db } from "../../firebase/firebaseConfig";
// import {
//   collection,
//   query,
//   getDocs,
//   where,
//   documentId,
// } from "firebase/firestore";
// import CardItem from './CardItem';


// const ItemDetailContainer = () => {
//   const [itemData, setItemData] = useState([])
//   const {id} = useParams()

//   useEffect(()=> {
//     const getItems = async () => {
      
//       const q = query(collection(db, "items"), where(documentId(), "===", id))
//       const docs = []
//       const querySnapshot= await getDocs (q);
//       querySnapshot.forEach((doc) => {
//         docs.push({...doc.data(), id:doc.id});
//       });
//       setItemData(docs);
//     };
//     getItems();
//   }, [])

//   return (
//     <div>ItemDetailContainer</div>
//   )
// }

// export default ItemDetailContainer
