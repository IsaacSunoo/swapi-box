import React, { Component } from 'react';

class PersonCard extends Component {

    render() {
      const { name, species, homeworld, homeworldPopulation, language, addRemoveFavorite } = this.props;

    return (
      <div className='card-container'>
        <div className='character-card'>
          <h1>{name} <span><i className="fas fa-star" onClick={() => { addRemoveFavorite({type: 'person', name, species, homeworld, homeworldPopulation,language}) }}></i></span></h1>
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