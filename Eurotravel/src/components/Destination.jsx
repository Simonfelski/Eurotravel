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
	}, [translatorPeople]);

	return (
		<div className="bg-[#f8f7ff] text-xl text-[black] font-bold p-5">
			<h2 className="text-center uppercase font-bold text-4xl p-3">{selectedCountry.country}</h2>
			<div className="flex justify-center py-5">
				<img src={selectedCountry.flag} alt={selectedCountry.country} />
			</div>
			<div className="text-center py-5">
				<p>Capital city: {selectedCountry.capitalCity}</p>
				<p>Language: {selectedCountry.language}</p>
			</div>
			<div className='text-center py-5'>
				<img src={selectedCountry.peopleImg} alt="Famous places images" />
				<p>Famous people:<br></br>{selectedCountry.famousPeople}</p>
			</div>
			<div className="text-center py-5">
				<img src={selectedCountry.foodImg} alt="Traditional food image" />
				<p>Traditional food:<br></br> {selectedCountry.food}</p>
			</div>
			<div className="text-center py-5">
				<img src={selectedCountry.placesImg} alt="Famous places image" />
				<p className='pt-5'>Famous places: <br></br>{selectedCountry.famousPlaces}</p>
			</div>

			<div className="flex justify-center items-center">
				<div>
					<div>
					<img src={`${randomTranslatorPerson.img}.png`} alt="Translator" className='py-5'/>
					</div>
					<p className="pb-3 text-center">Useful sentences:</p>
					<ul>
						{Object.entries(selectedCountry.sentences).map(([sentence, translation]) => (
							<li key={sentence} className='py-2'>
								{sentence} : <span className='text-[#9381ff]'>{translation}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div>
				<img src="/assets/general/traveler.png" alt="Traveler Image" />
				<p>Have you already visited that country?</p>
			</div>
			<div className="flex justify-center py-5">
				<button onClick={handleButtonClick} className="bg-[#9381ff] text-white font-bold rounded-md py-2 px-4">
					Choose another destination
				</button>
			</div>
		</div>
	)
}

export default Destination
