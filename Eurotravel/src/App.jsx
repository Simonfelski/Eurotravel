import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";
import Destination from './components/Destination';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <header className="w-full flex justify-between items-center px-4 py-6 border-b border-b-[#e6ebf4] bg-[#9381ff]">
          <Link to='/'>
            <div className="flex items-center">
              <p className="text-white font-bold text-lg">Eurotravel</p>
            </div>
          </Link>
          <div>
            <Link to='/about' className="text-white font-bold text-lg">About</Link>
          </div>
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/destination' element={<Destination />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
