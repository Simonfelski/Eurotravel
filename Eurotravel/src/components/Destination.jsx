import { useParams } from 'react-router-dom';
import countries from '../data/countries';

const Destination = () => {
	const { id: countryID } = useParams();

	const [country] = countries.filter(({ id }) => {
		return id === +countryID;
	});
	if (!countryID) {
		return <div>No country selected</div>;
	}

	return (
		<div className='text-black '>
			<h1>{country.country}</h1>
			<p>Capital city: {country.capitalCity}</p>
			<p>Language: {country.language}</p>
			<p>Famous food: {country.food}</p>
			<p>Famous people: {country.famousPeople}</p>
			<p className='mt-10 mb-2  font-medium'>Useful sentences:</p>
			<ul>
				{Object.entries(country.sentences).map(([sentence, translation]) => (
					<li key={sentence}>
						{sentence} : {translation}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Destination;
