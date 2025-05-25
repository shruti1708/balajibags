import React from 'react';
import './LocationsCovered.css';

const locations = [
  'Jaipur',
  'Udaipur',
  'Jodhpur',
  'Kota',
  'Ajmer',
  'Bikaner',
  'Alwar',
  'Bhilwara',
  'Sikar',
  'Tonk',
  'Neemrana',
  'Chittorgarh',
];

function LocationsCovered() {
  return (
    <section className="locations-section">
      <h2 className="locations-title">Locations We Cover</h2>
      <p className="locations-subtitle">
        We proudly serve businesses and retailers across Rajasthan and beyond.
      </p>
      <div className="locations-grid">
        {locations.map((location, index) => (
          <div key={index} className="location-card">
            {location}
          </div>
        ))}
      </div>
    </section>
  );
}

export default LocationsCovered;
