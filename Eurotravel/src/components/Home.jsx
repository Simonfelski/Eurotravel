import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import countries from '../data/countries';

const Home = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (selectedCountry) {
      navigate('/destination', { state: { country: randomCountry } });
    }
  }, [selectedCountry, navigate]);

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const randomCountry = countries[randomIndex];
    setSelectedCountry(randomCountry);
  };

  return (
    <div className='p-10 text-center lg:text-xl'>
      <h1>Are you ready to embark on your next European adventure? Eurotravel is here to make it happen. With our expertise, we'll handpick the perfect destination for you across Europe's stunning countries.</h1>
      <p className='py-5'>Let's start your journey today with a simple click!</p>
      <button onClick={handleButtonClick} className='bg-blue-500 text-white font-bold rounded-md py-2 px-4' >Choose country</button>
      {!selectedCountry && <div>(No country selected)</div>}
      {/* {selectedCountry !== null && <Destination country={selectedCountry} />} */}
    </div>
  );
};

export default Home;
