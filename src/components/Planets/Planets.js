import React, { Component } from 'react';
import PlanetCard from '../PlanetCard/PlanetCard';

class Planets extends Component {
  constructor() {
    super();
    this.state = {
      planets: [],
      isLoading: true
    }
  }

  componentDidMount = async () => {
    const url = 'https://swapi.co/api/planets';
    const response = await fetch(url)
    const unresolvedResident = await response.json();
    const planets = await this.fetchResidentsInfo(unresolvedResident.results);
    this.setState({ planets, isLoading: false });
  }

  fetchResidentsInfo = (planetArr) => {
    const unresolvedPromises = planetArr.map( async (planet) => {
      let name = await this.fetchResidentName(planet)
      return {...planet, residents: name}
    })
    return Promise.all(unresolvedPromises);
  }

  fetchResidentName = (planet) => {
    const residentName = planet.residents.map( async (resident) => {
      const response = await fetch(resident);
      const residentInfo = await response.json();
      return residentInfo.name;
    })
    return Promise.all(residentName);
  }

  render() {
    const { planets, isLoading } = this.state;
    const displayPlanets = planets.map(planet => {
      return <PlanetCard key={planet.name} {...planet} addRemoveFavorite={this.props.addRemoveFavorite}/>
    })

    return (
      isLoading ? (<div><img src='https://cdn.dribbble.com/users/817492/screenshots/2499676/kyloren_lightsaber.gif' alt='loading gif'></img></div>) : (<div className='planet-card-container' >{displayPlanets}</div>)
    )
  }
}

export default Planets;