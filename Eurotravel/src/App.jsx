import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Destination from './components/Destination';
import Quiz from "./components/Quiz/Quiz";
import Footer from './components/Footer';
import CurrencyConverter from "./components/Converter/CurrencyConverter";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/destination' element={<Destination />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/currency-calculator' element={<CurrencyConverter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
