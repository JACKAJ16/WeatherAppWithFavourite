import React, { useState } from 'react';
import './Input.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { setData } from '../../../actions/actions';

const Input = ({ setData }) => {

	const [city, setCity] = useState('')

	const API_KEY = "6c2847c395792f9cf85a804db24ced16";

	//Handling search submit
	const handleSubmit = (e) => {
		e.preventDefault()
		if (city) {
			axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`)
				.then(res => setData(res.data))
		}
	}

	return (
		<div className="input">
			<form onSubmit={handleSubmit}>
				<input className="input__search" onChange={(e) => setCity(e.target.value)} placeholder="search city..." type="text" />
				<input className="input__submit" disabled={city === ''} value="Search" type="submit" />
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		setData: (data) => { dispatch(setData(data)) },
	}
}

export default connect(null, mapDispatchToProps)(Input);