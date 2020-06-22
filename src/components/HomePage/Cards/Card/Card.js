import React, { useState, useEffect } from 'react';
import './Card.css'
import axios from 'axios';
import Buttons from '../../../Buttons/Buttons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Card = ({ city, storage }) => {
  const API_KEY = "6c2847c395792f9cf85a804db24ced16";
  
  const [info, setInfo] = useState('');
  const [refresh, setRefresh] = useState(false)

  //Fetching data by refresh click or when city storage has changed
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`)
      .then(res => setInfo(res.data))
  }, [storage, refresh, city])

  return (
    <div className="card">
      {info ?
        (<div className="card__inner">
          <h2 className="card__heading">
            {info.name}, {info.sys.country}
          </h2>
          <h3>
            {`${Math.round(info.main.temp)}\u00B0C`}
          </h3>
          <p>{`Feels like: ${Math.round(info.main.feels_like)}\u00B0C`}</p>
          <Buttons info={info} setRefresh={setRefresh} refresh={refresh} />
          <Link className="card__link" to={{ pathname: '/info', state: info }}>Show info</Link>
        </div>) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    storage: state.storage
  }
}

export default connect(mapStateToProps)(Card);