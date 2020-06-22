import React from 'react';
import Input from './Input/Input';
import SearchedWeather from './SearchedWeather/SearchedWeather';
import Cards from './Cards/Cards';
import './HomePage.css';

const HomePage = () => (
    <div className="homepage">
      <Input />
      <div className="weather-container">
        <SearchedWeather />
        <Cards />
      </div>
    </div>
  );

export default HomePage;