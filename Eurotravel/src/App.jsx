import React from "react"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from "./components/About"
import Home from "./components/Home"
import Destination from './components/Destination'
import logo from '/public/assets/SVG/logo.svg'



function App() {
 

  return (
    <BrowserRouter>
    <header className="w-full flex justify-between items-center px-4 py-8 border-b border-b-[#e6ebf4]">
      <Link to='/'>
        <div className="flex items-center">
        <img src='./assets/SVG/logo.svg' alt="logo" className="w-10 object-contain mr-2"/>
        <p>Eurotravel</p>
        </div>
      </Link>
      <div>
      <Link to='/about'>About</Link>
      </div>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/destination' element={<Destination />} />
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App
