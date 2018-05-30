import React from 'react';
import Hour from './HourCard.js'
import './Hourly.css';

const Hourly = (props) => {
  console.log(props)
  const array = props.sevenHourForecast.hourly_forecast.slice(0,7)
  return (
    <div className='hourly-container'>
      {
        array.map((hour, i) => {
             return (
             <Hour hour={hour} key={i} />    
           )
        })
      }
    </div>
  )
}

export default Hourly;