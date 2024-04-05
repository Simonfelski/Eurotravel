import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";
import Destination from './components/Destination';
import Quiz from "./components/Quiz/Quiz";
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <header className="w-full flex justify-between items-center px-4 py-6 border-b border-b-[#e6ebf4] bg-gradient-to-r from-cyan-500 to-blue-500">
          <Link to='/'>
            <div className="flex items-center">
              <p className="text-white font-bold text-lg md:text-xl lg:text-2xl">Eurotravel</p>
            </div>
          </Link>
          <div>
            <Link to='/about' className="text-white font-bold text-lg md:text-xl lg:text-2xl pr-4">About</Link>
            <Link to='/quiz' className="text-white font-bold text-lg md:text-xl lg:text-2xl">Quiz</Link>
          </div>
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/destination' element={<Destination />} />
            <Route path='quiz' element={<Quiz />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
