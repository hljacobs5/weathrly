import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './MockData.js';

class App extends Component {
  render() {
    return (
     <h1>Weatherly</h1>
     <CurrentWeather currentWeather={currentObservation}/>
      </div>
    );
  }
}

export default App;
