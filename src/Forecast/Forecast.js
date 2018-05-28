import React from 'react';
import Day from '../Day/Day.js'
import './Forecast.css';

const Forecast = (props) => {
  console.log(props)
  const array = props.tenDayForecast.slice(0,10)
  return (
    <div className='day-container'>
      <h1>10 Day Forecast</h1>
      {
        array.map((day, i) => {
             return (
             <Day day={day} />
    
             )
        })
      }

    </div>
  )
}

export default Forecast;