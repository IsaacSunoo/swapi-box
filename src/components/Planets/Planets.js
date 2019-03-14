import React, { Component } from 'react';

class Planets extends Component {
  constructor() {
    super();
    this.state = {
      planets: []
    }
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/planets';
    fetch(url)
      .then(response => response.json())
      .then(planets => this.setState({planets: planets.results}))
  }

  render() {
    const { planets } = this.state;
    console.log('Planets: ', planets);

    return (
      <div>

      </div>
    )
  }
}

export default Planets;