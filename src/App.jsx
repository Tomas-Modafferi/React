import {BrowserRouter , Routes, Route, Link} from "react-router-dom"
import React from 'react';
import { useEffect, useState, CSSProperties} from 'react';
import './App.css';
import './components/Header/Header';
import {db} from "./firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import Header from "./components/Header/Header"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import GameCenter from "./components/body/GameCenter";
import Contacto from "./components/body/Contacto";
import About from "./components/body/About";
import imagenLogo from './assets/img/loggo2.png'
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <div className="container">
      <div className="lista">
       <h1 className="games">Game Center</h1>
       <img src={imagenLogo} className="logo"/>
      </div>
    </div>
      
       <Routes>
        <Route path= "/" element ={<GameCenter/>}/>
        <Route path= "contacto" element={<Contacto />}/>
        <Route path= "/about" element={<About />}/>
        <Route path= "/detail/:id" element={<ItemDetailContainer/>}/>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
