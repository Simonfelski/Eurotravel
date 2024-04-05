import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import countries from '../data/countries'
import translatorPeople from '../data/translatorPeople'

const Destination = () => {
	const location = useLocation()
	const country = location.state?.country
	const [selectedCountry, setSelectedCountry] = useState(country)
	const [randomTranslatorPerson, setRandomTranslatorPerson] = useState(translatorPeople[Math.floor(Math.random() * translatorPeople.length)])

	const handleButtonClick = () => {
		const randomIndex = Math.floor(Math.random() * countries.length)
		const randomCountry = countries[randomIndex]
		setSelectedCountry(randomCountry)
	}

	
	useEffect(() => {
		window.scrollTo(0, 0);
		const randomPersonIndex = Math.floor(Math.random() * translatorPeople.length)
		const randomPerson = translatorPeople[randomPersonIndex]
		setRandomTranslatorPerson(randomPerson)
	},);
	

	return (
		<div className='bg-[#f7f7f7]'>
		<div className="bg-[#f7f7f7] text-lg md:text-xl lg:text-2xl text-[black] font-bold p-5 md:px-20 lg:px-10 lg:max-w-[1366px] lg:m-auto">
			<h2 className="text-center uppercase font-bold text-4xl lg:text-6xl p-3">{selectedCountry.country}</h2>
			<div className="flex justify-center py-5">
				<img src={selectedCountry.flag} alt={selectedCountry.country} />
			</div>
			<div className="text-center md:text-xl lg:text-3xl py-5">
				<p>Capital city: {selectedCountry.capitalCity}</p>
				<p>Language: {selectedCountry.language}</p>
			</div>
			<div className='hidden lg:block lg:p-12 lg:text-3xl'>
				<p>General knowledge:</p>
				</div>
			<div className='lg:flex lg:items-center'>
				<div className='md:flex md:justify-center items-center px-10'>
				<img src={selectedCountry.factsImg} alt="Facts Book Image" className='py-5' />
				</div>
				<p className="pb-3 text-center lg:hidden">General knowledge:</p>
				<ul className='flex flex-col lg:flex lg:pl-8'>
					{Object.entries(selectedCountry.facts).map(([fact, description]) => (
						<l1 key={fact} className='py-2'>
							{fact} : <span className='text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500'>{description}</span>
						</l1>
					))}
				</ul>
			</div>
			<div className='text-center md:flex md:flex-col md:items-center lg:flex lg:flex-row lg:items-center py-5 px-10'>
				<img src={selectedCountry.peopleImg} alt="Famous places images" className='lg:pr-8 lg:order-1'/>
				<p className='md:text-2xl lg:text-3xl'>Famous people:<br></br><span className='md:text-xl lg:text-2xl lg:flex'>{selectedCountry.famousPeople}</span></p>
			</div>
			<div className='text-center md:flex md:flex-col md:items-center lg:flex lg:flex-row lg:justify-evenly py-5 px-10 lg:px-0'>
				<img src={selectedCountry.foodImg} alt="Traditional food image" className='lg:pr-8'/>
				<p className='md:text-2xl lg:text-3xl'>Traditional food:<br></br> <span className='md:text-xl lg:text-2xl lg:flex'>{selectedCountry.food}</span></p>
			</div>
			<div className='text-center md:flex md:flex-col md:items-center lg:flex lg:flex-row lg:justify-evenly py-5 px-10 lg:px-0'>
				<img src={selectedCountry.placesImg} alt="Famous places image" className=' lg:order-1'/>
				<p className='pt-5 md:text-2xl lg:text-3xl'>Famous places: <br></br><span className='md:text-xl lg:text-2xl lg:flex'>{selectedCountry.famousPlaces}</span></p>
			</div>

			<div >
				<p className='hidden lg:p-12 lg:flex lg:justify-center md:text-2xl lg:text-3xl'>Useful sentences:</p>
				<div className='lg:flex'>
					<div className='flex justify-center'>
					<img src={`${randomTranslatorPerson.img}.png`} alt="Translator" className='py-5 '/>
					</div>
					<p className="pb-3 text-center lg:hidden">Useful sentences:</p>
					<ul>
						{Object.entries(selectedCountry.sentences).map(([sentence, translation]) => (
							<li key={sentence} className='py-2'>
								{sentence} : <span className='text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500'>{translation}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='text-center md:flex md:flex-col md:items-center py-5'>
				<img src="/assets/general/traveler.png" alt="Traveler Image" />
				<p className='md:text-xl lg:text-3xl'>Have you already visited that country?</p>
			</div>
			<div className="flex justify-center py-5">
				<button onClick={handleButtonClick} className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-md py-2 px-4 shadow-xl">
					Choose another destination
				</button>
			</div>
		</div>
		</div>
	)
}

export default Destination
