import React, { Component } from 'react';
import VehicleCard from '../VehicleCard/VehicleCard';
import PeopleCard from '../PeopleCard/PersonCard';
import PlanetCard from '../PlanetCard/PlanetCard';

class Favorites extends Component {
    render() {
        const { favorites, addRemoveFavorite } = this.props;
        console.log('favorites in favorites:', favorites)
        const displayFavorites = favorites.map(fav => {
            if (fav.type === 'vehicle') {
                return <VehicleCard {...fav} addRemoveFavorite={addRemoveFavorite}/>
            } else if (fav.type === 'person') {
                return <PeopleCard {...fav} addRemoveFavorite={addRemoveFavorite}/>
            } else if (fav.type === 'planet') {
                return <PlanetCard {...fav} addRemoveFavorite={addRemoveFavorite}/>
            }
        })

    return (
      <div className='favorites-container'>
          {displayFavorites}
      </div>
    )
  }
}

export default Favorites;