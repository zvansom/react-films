import React, { Component } from 'react';
import './App.css';

import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';



class App extends Component {
  render() {
    return (
      <div className="App">
        <FilmListing films={TMDB.films} />
        <FilmDetails />
      </div>
    );
  }
}

export default App;
