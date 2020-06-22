import React from 'react';
import './Add.css'
import { connect } from 'react-redux';
import { setStorage, addCity } from '../../../../actions/actions';

const Add = ({ currentCity, setStorage, storage, addCity }) => {

  //Adding city to favourite
  const addToFavourite = () => {
    localStorage.setItem('fav', localStorage.getItem('fav') ?

      JSON.stringify([...JSON.parse(localStorage.getItem('fav')), currentCity.name]) :
      JSON.stringify([currentCity.name]))

    addCity(currentCity.name);
    setStorage(JSON.parse(localStorage.getItem('fav')))
  }

  return (
    <div>
      <button className="add" disabled={storage.includes(currentCity.name)} onClick={addToFavourite}>Add to favourite</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentCity: state.currentCity,
    storage: state.storage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setStorage: (data) => { dispatch(setStorage(data)) },
    addCity: (data) => { dispatch(addCity(data)) }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);