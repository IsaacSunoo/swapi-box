import React, { Component } from 'react';
import People from '../People/People';
import Planets from '../Planets/Planets';
import Vehicles from '../Vehicles/Vehicles';
import Favorites from '../Favorites/Favorites';

class InfoContainer extends Component {
    constructor() {
        super();
        this.state = {
          containerDisplay: '',
          favorites: []
        }
    }

  switchDisplay = (display) => {
    this.setState({ containerDisplay: display })
  }

  addRemoveFavorite = (card) => {
    const { favorites } = this.state;
    const isFavorite = favorites.find(favorite => {
      return favorite.name === card.name;
    })
    if (!isFavorite) {
      console.log('add to favorites entered')
      favorites.push(card);
    } else if (isFavorite) {
      let idx = favorites.indexOf(card);
      console.log('index', idx);
      favorites.splice(idx, 1);
    }
  }

    render() {
      const { favorites, containerDisplay } = this.state;
      const compContainer = {
        people: (<People addRemoveFavorite={this.addRemoveFavorite}/>),
        planets: (<Planets addRemoveFavorite={this.addRemoveFavorite}/>),
        vehicles: (<Vehicles addRemoveFavorite={this.addRemoveFavorite}/>),
        favorites: (<Favorites addRemoveFavorite={this.addRemoveFavorite} favorites={this.state.favorites}/>)
      }

    return (
      <div className='info-container'>
        <section className='buttons-section'>
          <button type='submit' className='favorites-btn btn-design' onClick={() => { this.switchDisplay('favorites') }}>Favorites - <span className='favorite-counter'> {favorites.length} </span></button>
          <button type='submit' className='btn-design' onClick={() => { this.switchDisplay('people') }}>People</button>
          <button type='submit' className='btn-design' onClick={() => { this.switchDisplay('planets') }}>Planets</button>
          <button type='submit' className='btn-design' onClick={() => { this.switchDisplay('vehicles') }}>Vehicles</button>
        </section>
        <section className='input-results'>
          {compContainer[containerDisplay]}
        </section>
      </div>
    )
  }
}

export default InfoContainer;