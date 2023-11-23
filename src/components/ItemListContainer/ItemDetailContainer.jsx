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


const ItemDetailContainer = () => {
  const {id} = useParams()
  const{item, loading} = useGetItem(id)

  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer
