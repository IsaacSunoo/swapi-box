import React, { Component } from 'react';
import FilmInfo from './components/FilmInfo/FilmInfo';
import Header from './components/Header/Header';
import InfoContainer from './components/InfoContainer/InfoContainer';
// import People from './components/People/People';
// import Planets from './components/Planets/Planets';
// import Vehicles from './components/Vehicles/Vehicles';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starWarsFilm: [],
      filmIntro: true
    }
  }

  componentDidMount() {
    const url = `https://swapi.co/api/films/${this.generateFilm()}`;
    fetch(url)
      .then(response => response.json())
      .then(starWarsFilm => { this.setState({ starWarsFilm }) })
      .catch(err => { throw new Error(err); })
    this.removeAnimation();
  }

  removeAnimation = () => {
    setTimeout(() => { this.setState({ filmIntro: false }) }, 35000 );
  }

  hideFilmIntro = () => {
    this.setState({ filmIntro: false });
  }

  generateFilm = () => {
    let randomNum = Math.floor((Math.random() * 7) + 1);
    return randomNum;
  }

  render() {
    const { starWarsFilm, filmIntro } = this.state;
    const displayIntro = filmIntro ? { display: 'none' } : {};
    console.log('state', starWarsFilm);

    return (
      <div onClick={this.hideFilmIntro} className='app-container'>
        {
          filmIntro === true &&
          <FilmInfo starWarsFilm={starWarsFilm} />
        }
        <div style={displayIntro}>
          <Header />
          <InfoContainer starWarsFilm={starWarsFilm} />
          {/* <People />
          <Planets />
          <Vehicles /> */}
        </div>
      </div>
    );
  }
}

export default App;
