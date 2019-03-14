import React, { Component } from 'react';
import PersonCard from './PersonCard';

class People extends Component {
  constructor() {
    super();
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/people/';
    fetch(url)
      .then(response => response.json())
      .then(characters => this.setState({ characters: characters.results }))
      .catch(err => { throw new Error(err); })
  }

  render() {
    const { characters } = this.state;
    console.log('Characters: ', characters);

    const displayCharacters = characters.map(character => {
      return <PersonCard key={character.name} character={character} />;
    })
    return (
      <div>
        {displayCharacters}
      </div>
    )
  }
}

export default People;