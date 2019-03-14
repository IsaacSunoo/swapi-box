import React, { Component } from 'react';

class Vehicles extends Component {
  constructor() {
    super();
    this.state = {
      vehicles: []
    }
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/vehicles';
    fetch(url)
      .then(response => response.json())
      .then(vehicles => this.setState({ vehicles: vehicles.results }))
  }

  render() {
    const { vehicles } = this.state;
    console.log('Vehicles: ', vehicles);

    return (
      <div>

      </div>
    )
  }
}

export default Vehicles;