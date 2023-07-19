import React, { useState, useEffect } from 'react';

const CountrySelector = ({ onCountrySelect }) => {
  const [countryOptions, setCountryOptions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    // Fetch available country options from API
    fetch('https://api.worldbank.org/v2/country?format=json')
      .then((response) => response.json())
      .then((data) => {
        const countryOptions = data[1].map((country) => ({
          code: country.id,
          name: country.name,
        }));
        setCountryOptions(countryOptions);
      })
      .catch((error) => {
        console.error('Error fetching country options:', error);
      });
  }, []);

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSelectedCountry(searchTerm);
  };

  const handleCountrySelect = () => {
    onCountrySelect(selectedCountry);
  };

  return (
    <div>
      <select value={selectedCountry} onChange={handleInputChange}>
        <option value="">Select a country</option>
        {countryOptions.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <button onClick={handleCountrySelect}>Select</button>
    </div>
  );
};

export default CountrySelector;
