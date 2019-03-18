import React from 'react';

const VehicleCard = ({ vehicle_class, name, model, passengers, addRemoveFavorite}) => {
  return (
    <div className='vehicle-card'>
      <h1>{name} <span><i className="fas fa-star" onClick={() => { addRemoveFavorite({ type: 'vehicle', name, vehicle_class, model, passengers }) }}></i></span></h1>
      <p>Model: {model}</p>
      <p>Class: {vehicle_class}</p>
      <p>Passengers: {passengers}</p>
    </div>
  )
}

export default VehicleCard;