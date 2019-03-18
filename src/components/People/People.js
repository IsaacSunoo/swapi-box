import React, { Component } from 'react';
import PersonCard from '../PeopleCard/PersonCard';

class People extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      isLoading: true
    }
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/people/';
    fetch(url)
      .then(response => response.json())
      .then(characters => this.fetchCharData(characters.results))
      .then(characters => this.setState({ characters, isLoading: false }))
      .catch(err => { throw new Error(err); })
  }

  fetchCharData = (charactersArr) => {
    const unresolvedPromises = charactersArr.map(person => {
      return Promise.all([fetch(person.species[0])
        .then(response => response.json())
        .then(({ name, language }) => ({ name: person.name, language, species: name }))
        , fetch(person.homeworld)
          .then(response => response.json())
          .then(({name, population}) => ({ homeworld: name, homeworldPopulation: population }) )
    ])
    })
    return Promise.all(unresolvedPromises)
      .then(response => response.map(character => {
        return Object.assign({}, character[0], character[1])
            }));
  }

  render() {
    const { characters, isLoading } = this.state;

    const displayCharacters = characters.map(character => {
      return <PersonCard key={character.name} {...character} addRemoveFavorite={this.props.addRemoveFavorite}/>;
    })

    return (
      isLoading ? (<div><img src='https://cdn.dribbble.com/users/817492/screenshots/2499676/kyloren_lightsaber.gif' alt='loading gif'></img></div>) : (< div className = 'character-card-container' > { displayCharacters }</div>)
    )
  }
}

export default People;