import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/login';


function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  )
}

export default App
