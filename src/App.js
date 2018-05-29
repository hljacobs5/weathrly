import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather/CurrentWeather.js';
import Forecast from './Forecast/Forecast.js';
import Hourly from './hourly_forecast/Hourly.js';
import { data } from './MockData.js';

class App extends Component {

  render() {
  console.log(data)
    return (
      <div>
        <h1>Weathrly</h1>
        <CurrentWeather
          currentWeather={data.current_observation} 
          />

        <Hourly 
          sevenHourForecast={data.forecast.txt_forecast.forecastday} 
          />

        <Forecast 
          tenDayForecast={data.forecast.simpleforecast.forecastday} 
          />
      </div>
    );
  }
}

export default App;
