import React from 'react'
import { useEffect, useState } from 'react';
import './App.css'
import './components/navBar/navBar';
import './components/Header/Header';
import {db} from "./firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";



import ProductCard from './components/body/card';
import Header from "./components/Header/Header"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
      const [items, setItems] = useState([])
  return (
    <header className='header'>
       <Header
       />
       <ItemListContainer/>
        {/* <ProductCard/> */}  
    </header>
  )
}

export default App
