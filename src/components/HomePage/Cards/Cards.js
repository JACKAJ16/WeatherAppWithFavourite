import React from 'react';
import './Cards.css'
import Card from './Card/Card';
import { connect } from 'react-redux';

const Cards = ({ storage }) => (
  <div className="cards">
    {storage[0] ?
      storage.map((city, index) =>
        <div key={index.toString()}>
          <Card city={city} />
        </div>) :
      <h2 className="favourite-empty">No choosen cities yet</h2>}
  </div>
);

const mapStateToProps = (state) => {
  return {
    storage: state.storage
  }
}

export default connect(mapStateToProps)(Cards);