import {useState,useEffect} from 'react'
import {db} from "../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const useFetch = () => {
        const [items, setItems] = useState([]);
        const [loading, setLoading] = useState(true);
      useEffect ( () =>{
        const getItems = async () => {
          const q = query(collection(db, "items"));
          const docs = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id});
          })
          setItems(docs);
          setLoading(false)
        };
        getItems();
      }, [])
    return {
        items,
        loading
    }
}

export default useFetch