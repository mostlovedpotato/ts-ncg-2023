import React from 'react';

const Chart = ({ country, indicatorData }) => {
  return (
    <div>
      <h2>World Bank Indicator Data for {country}</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {indicatorData.map((dataPoint, index) => (
            <tr key={index}>
              <td>{dataPoint.date}</td>
              <td>{dataPoint.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Chart;
