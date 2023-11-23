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
