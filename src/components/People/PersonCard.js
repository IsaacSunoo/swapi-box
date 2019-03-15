import React, { Component } from 'react';

class PersonCard extends Component {

    render() {
        const { name, species, homeworld, homeworldPopulation, language } = this.props;

    return (
      <div className='card-container'>
        <div className='character-card'>
                <h1>{name}</h1>
                <p>Homeworld: {homeworld}</p>
                <p>Species: {species}</p>
                <p>Language: {language}</p>
                <p>Population: {homeworldPopulation}</p>
        </div>
      </div>
    )
  }
}

export default PersonCard;