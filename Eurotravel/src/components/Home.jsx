import { useState } from 'react';
import countries from '../data/countries';
import { Link } from 'react-router-dom';
import { ComponentWithProps } from './ComponentWithProps';

const Home = () => {
	const [selectedCountry, setSelectedCountry] = useState(null);

	const exampleArray = new Array(countries[0], countries[2]);

	const handleButtonClick = () => {
		const randomIndex = Math.floor(Math.random() * countries.length);
		const randomCountry = countries[randomIndex];
		setSelectedCountry(randomCountry);
	};

	return (
		<div className='p-10 text-center lg:text-xl flex flex-col gap-3'>
			<h1>
				Are you ready to embark on your next European adventure? Eurotravel is here to make it happen. With our
				expertise, we&apos;ll handpick the perfect destination for you across Europe&apos;s stunning countries.
			</h1>
			<p className='py-5'>Let&apos;s start your journey today with a simple click!</p>
			<button
				onClick={handleButtonClick}
				className='bg-blue-500 w-max mx-auto text-white font-bold rounded-md py-2 px-4'>
				Choose country
			</button>

			<div>
				{!selectedCountry && <div>(No country selected)</div>}
				{selectedCountry ? (
					<div className='space-y-3'>
						<p>
							Selected country: <span className='text-orange-500 font-medium'>{selectedCountry.country}</span>
						</p>
						<div>
							<Link
								to={`destination/${selectedCountry.id}`}
								className='bg-green-500 text-white rounded-md p-2'>
								Check details
							</Link>
						</div>
					</div>
				) : null}
			</div>
			<div className='space-y-5'>
				<p className='mt-10 font-bold'>Generowanie UI na podstawie przekazanch propsów:</p>
				{exampleArray.map(country => (
					<ComponentWithProps
						key={country.id}
						{...country}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
