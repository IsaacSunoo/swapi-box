import React, { Component } from 'react'

class Film extends Component {
  render() {
    const { starWarsFilm } = this.props;

    return (
      <div className='film-container'>
        <div className='gradient-container'></div>
        <div className='movie-info'>
          <h1>{starWarsFilm.title} </h1>
          <p className='film-info'>{starWarsFilm.opening_crawl}</p>
        </div>
      </div>
    )
  }
}

export default Film;