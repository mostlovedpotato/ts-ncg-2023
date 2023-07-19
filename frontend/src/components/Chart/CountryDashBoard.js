import React, { useState } from 'react';
import CountrySelector from './CountrySelector';
import Chart from './Chart';

const CountryDataDashboard = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [indicatorData, setIndicatorData] = useState([]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);

    // Fetch indicator data based on the selected country (adjust API URL accordingly)
    fetch(`https://api.worldbank.org/v2/country/${country}/indicator/SP.POP.TOTL?format=json`)
      .then((response) => response.json())
      .then((data) => {
        const indicatorValues = data[1].map((entry) => ({
          date: entry.date,
          value: entry.value,
        }));
        setIndicatorData(indicatorValues);
      })
      .catch((error) => {
        console.error('Error fetching indicator data:', error);
      });
  };

  return (
    <div>
      <CountrySelector onCountrySelect={handleCountrySelect} />
      {indicatorData.length > 0 && (
        <Chart country={selectedCountry} indicatorData={indicatorData} />
      )}
    </div>
  );
};

export default CountryDataDashboard;
