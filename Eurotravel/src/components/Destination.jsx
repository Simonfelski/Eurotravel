import React from 'react';
import { useLocation } from 'react-router-dom';

const Destination = () => {
  const location = useLocation();
  const country = location.state?.country;

  if (!country) {
    return <div>No country selected</div>
  }

  return (
    <div className='text-black '>
      <h1>{country.country}</h1>
      <p>Capital city: {country.capitalCity}</p>
      <p>Language: {country.language}</p>
      <p>Famous food: {country.food}</p>
      <p>Famous people: {country.famousPeople}</p>
      <p>Useful sentences:{country.sentences}</p>
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
