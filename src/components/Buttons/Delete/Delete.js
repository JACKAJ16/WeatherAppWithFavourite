import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setStorage, removeCity } from '../../../actions/actions';

const Delete = ({ info, setStorage, removeCity, id }) => {
  
  //Handling delete button
  const handleDelete = () => {
    removeCity(info.name)
  }
  //Delete method
  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(id))
    setStorage(JSON.parse(localStorage.getItem('fav')))
  }, [id, setStorage])

  return (
    <div>
      <button className="button delete" onClick={handleDelete}>Delete</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setStorage: (data) => { dispatch(setStorage(data)) },
    removeCity: (data) => { dispatch(removeCity(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Delete);