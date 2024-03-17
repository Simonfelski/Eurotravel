import React from "react"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import logo from '../public/assets/logo.svg'



function App() {
 

  return (
    <BrowserRouter>
    <header>
      <Link to='/' />
      <img src='../assets/logo.svg' alt="logo" className="w-28 object-contain" />
      <Link />
    </header>
    </BrowserRouter>
  )
}

export default App
