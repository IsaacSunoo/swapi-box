import React, { Component } from 'react';

class PersonCard extends Component {
    constructor() {
        super();
        this.state = {
            species: '',
            language: '',
            homeworld: '',
            homeworldPopulation: ''
        }
    }

    componentDidMount() {
        const speciesUrl = this.props.character.species[0];
        const homeworldUrl = this.props.character.homeworld;
        // console.log(homeworldUrl)
        fetch(speciesUrl)
            .then(response => response.json())
            .then(species => this.setState({
                species: species.name,
                language: species.language
            }))
            .catch(err => { throw new Error(err); })

        fetch(homeworldUrl)
            .then(response => response.json())
            .then(planet => this.setState({
                homeworldPopulation: planet.population,
                homeworld: planet.name
            }))
    }

    render() {
        // console.log(this.props.character);
        // console.log(this.state.species)
        console.log(this.state.homeworldPopulation)
        const { character } = this.props;
        const { species, homeworld, homeworldPopulation, language } = this.state;

    return (
      <div>
            <h1>{character.name}</h1>
            <p>Homeworld: {homeworld}</p>
            <p>Species: {species}</p>
            <p>Language: {language}</p>
            <p>Population: {homeworldPopulation}</p>
      </div>
    )
  }
}

export default PersonCard;