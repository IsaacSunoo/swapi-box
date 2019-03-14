import React, { Component } from 'react';
import People from '../People/People';


class InfoContainer extends Component {
    constructor() {
        super();
        this.state = {
            favorites: []
        }
    }
    render() {
        const { favorites } = this.state;

    return (
      <div className='info-container'>
        <section className='buttons-section'>
            <button type='submit' className='favorites-btn btn-design'>Favorites - <span className='favorite-counter'> {favorites.length} </span></button>
            <button type='submit' className='btn-design'>People</button>
            <button type='submit' className='btn-design'>Planets</button>
            <button type='submit' className='btn-design'>Vehicles</button>
        </section>
        <section className='input-results'>
            <People />
        </section>
      </div>
    )
  }
}

export default InfoContainer;