import { useState } from 'react'

import './App.css'
import {BrowserRouter , Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        
        <Route exact path='/list'  element={<ItemListContainer greeting="¡Bienvenido a Mi Tienda!" />}></Route>
      </Routes>

      
    </BrowserRouter>
      
    </>
  )
}

export default App
