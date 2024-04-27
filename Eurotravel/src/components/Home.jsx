import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import countries from '../data/countries'

const Home = () => {
	const navigate = useNavigate()
	const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    if (selectedCountry) {
      navigate('/destination', { state: { country: selectedCountry } })
    }
  }, [selectedCountry, navigate]) 
  
	const handleButtonClick = () => {
		const randomIndex = Math.floor(Math.random() * countries.length)
		const randomCountry = countries[randomIndex]
		setSelectedCountry(randomCountry)
	}

	return (
		<div className="p-8 text-center text-lg md:text-xl md:p-16 lg:text-2xl">
			<h1 className='pb-3 font-bold'>
				Are you ready to embark on your next European adventure?
			</h1>
			<p>Eurotravel is here to make it happen. With our
				expertise, we'll handpick the perfect destination for you across Europe's stunning countries.</p>
			<p className="py-3">Let's start your journey today with a simple click!</p>
			<div className='flex justify-center pb-3'>
			<img src="/assets/general/chooseDestination.png" alt="A man reading a map in front of the car" />
			</div>
			<div>
			<button onClick={handleButtonClick} className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-md py-2 px-4 shadow-xl">
				Start your journey
			</button>
			</div>
		</div>
	)
}

export default Home
