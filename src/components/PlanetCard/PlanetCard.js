import React from 'react';

const PlanetCard = ({ name, residents, population, climate, terrain, addRemoveFavorite }) => {
  return (
    <div className='card-container'>
      <div className='planet-card'>
        <h1>{name} <span><i className="fas fa-star" onClick={() => { addRemoveFavorite({type: 'planet', name, residents, population, climate, terrain}) }}></i></span></h1>
        <p>Climate: {climate}</p>
        <p>Terrain: {terrain}</p>
        <p>Population: {population}</p>
        Residents: {residents.map(resident => {
          return (<p>{resident}</p>)
        })}
      </div>
    </div>
  )
}

export default PlanetCard;