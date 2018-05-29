import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather/CurrentWeather.js';
import Forecast from './Forecast/Forecast.js';
import Hourly from './hourly_forecast/Hourly.js';
import { data } from './MockData.js';
import './App.css';

class App extends Component {

  render() {

    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Raleway+Dots" rel="stylesheet" />
        <h2 className='title'>Weathrly</h2>
        <CurrentWeather
          currentWeather={data.current_observation} 
          />
        <h2>Seven Hour Forecast</h2>
        <Hourly 
          sevenHourForecast={data.forecast.simpleforecast.forecastday} 
          />
        <h2>Ten Day Forecast</h2>
        <Forecast 
          tenDayForecast={data.forecast.simpleforecast.forecastday} 
          />
      </div>
    );
  }
}

export default App;
