import React from 'react'
import './App.css'
import './components/navBar/navBar';
import './components/Header/Header';


import ProductCard from './components/body/card';
import Header from "./components/Header/Header"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

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
