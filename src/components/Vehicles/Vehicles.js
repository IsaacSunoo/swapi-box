import React, { Component } from 'react';
import VehicleCard from '../VehicleCard/VehicleCard';

class Vehicles extends Component {
  constructor() {
    super();
    this.state = {
      vehicles: [],
      isLoading: true
    }
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/vehicles';
    fetch(url)
      .then(response => response.json())
      .then(vehicles => this.setState({vehicles: vehicles.results, isLoading: false}))
  }

  render() {
    const { vehicles, isLoading } = this.state;
    const displayVehicles = vehicles.map(vehicle => {
      return <VehicleCard key={vehicle.name} {...vehicle} addRemoveFavorite={this.props.addRemoveFavorite}/>
    })

    return (
      isLoading ? (<div className='center-image'><img src='https://media.giphy.com/media/TCS6qvKbfxcOI/giphy.gif' alt='loading gif'></img></div>) : (<div className='vehicle-card-container'>{displayVehicles}</div>)
    )
  }
}

export default Vehicles;