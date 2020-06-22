import React from 'react';
import './Info.css';
import moment from 'moment';

const Info = ({ location }) => {

	//time formating
	const handleTime = (time) => {
		return moment.unix(time).format("HH:mm")
	}

	return (
		<div>
			<div className="info">
				<h1>{location.state.name}, {location.state.sys.country}</h1>
				<h2>{`${Math.round(location.state.main.temp)}\u00B0C`}</h2>
				<h3>{location.state.weather[0].main}</h3>
				<h3>{`Max: ${Math.round(location.state.main.temp_max)}\u00B0C`} {`Min: ${Math.round(location.state.main.temp_min)}\u00B0C`}</h3>
				<h4>{`Feels like: ${Math.round(location.state.main.feels_like)}\u00B0C`}</h4>
				<h4>Pressure: {Math.round(location.state.main.pressure) + 'mm'}  Humidity: {Math.round(location.state.main.humidity) + '%'}</h4>
				<h5>Wind speed: {location.state.wind.speed + 'm/s'}</h5>
				<h5>Sunrise: {handleTime(location.state.sys.sunrise)}  Sunset: {handleTime(location.state.sys.sunset)}</h5>
			</div>
		</div>
	);
};

export default Info;