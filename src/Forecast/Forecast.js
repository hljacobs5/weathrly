import React from 'react';
import Day from '../Day/Day.js'
import './Forecast.css';

const Forecast = (props) => {
  const array1 = props.tenDayForecast.slice(0, 5)
  const array2 = props.tenDayForecast.slice(5, 10)
  return (
    <div>
    <div className='day-container-1' >
      {
        array1.map((day, i) => {
             return (
             <Day day={day} key={i} />    
           )
        })
      }

    </div>

    <div className='day-container-2' > {
      array2.map((day, i) => {
        return(
          <Day day={day} key={i} />
        )
      })
    }
    </div>
    </div>
  )
}

export default Forecast;