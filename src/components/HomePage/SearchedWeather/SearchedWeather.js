import React from 'react';
import './SearchedWeather.css';
import { connect } from 'react-redux';
import Add from './Add/Add';

const SearchedWeather = ({ currentCity }) => (
	<div className="searchedweather">
		{currentCity ?
			(<div className="searchedweather__inner">
				<h1>
					{currentCity.name}, {currentCity.sys.country}
				</h1>
				<h2>
					{`${Math.round(currentCity.main.temp)}\u00B0C`}
				</h2>
				<p>{`Max: ${Math.round(currentCity.main.temp_max)}\u00B0C `}
					{`Min: ${Math.round(currentCity.main.temp_min)}\u00B0C `}
				</p>
				<Add />
			</div>
			) : <h2 className="weather-empty">Search for any city</h2>}
	</div>
);


const mapStateToProps = (state) => {
	return {
		currentCity: state.currentCity
	}
}

export default connect(mapStateToProps)(SearchedWeather);