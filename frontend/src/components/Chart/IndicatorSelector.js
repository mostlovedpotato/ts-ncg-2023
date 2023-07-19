import React, { useState } from 'react';
import classes from './IndicatorSelector.module.css'

const IndicatorSelector = () => {
  const [indicators, setIndicators] = useState([]);
  const [selectedIndicator, setSelectedIndicator] = useState('');

  const fetchIndicators = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://api.worldbank.org/v2/indicator?format=json&per_page=1000&prefix=${searchTerm}`
      );
      const data = await response.json();
      const indicatorsData = data[1].map((indicator) => ({
        id: indicator.id,
        name: indicator.name,
      }));
      setIndicators(indicatorsData);
    } catch (error) {
      console.error('Error fetching indicators:', error);
    }
  };

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSelectedIndicator(searchTerm);
    fetchIndicators(searchTerm);
  };

  const handleIndicatorSelect = (indicator) => {
    setSelectedIndicator(indicator.name);
    setIndicators([]);
  };

  return (
    <div className={classes.container}>
      <input
      className={classes.input}
        type="text"
        value={selectedIndicator}
        onChange={handleInputChange}
        placeholder="Search for an indicator"
      />
      <ul className={classes.list}>
        {indicators.map((indicator) => (
          <li className={classes.listItem} key={indicator.id} onClick={() => handleIndicatorSelect(indicator)}>
            {indicator.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndicatorSelector;
