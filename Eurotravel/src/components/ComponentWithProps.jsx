import PropTypes from 'prop-types';

export const ComponentWithProps = ({ country, capitalCity, language, food, famousPeople }) => {
	return (
		<div>
			<h1>{country}</h1>
			<p>Capital city: {capitalCity}</p>
			<p>Language: {language}</p>
			<p>Famous food: {food}</p>
			<p>Famous people: {famousPeople}</p>
		</div>
	);
};
ComponentWithProps.propTypes = {
	country: PropTypes.string.isRequired,
	capitalCity: PropTypes.string.isRequired,
	language: PropTypes.string.isRequired,
	food: PropTypes.string.isRequired,
	famousPeople: PropTypes.string.isRequired,
};
