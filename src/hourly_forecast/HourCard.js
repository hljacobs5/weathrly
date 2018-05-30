import React from 'react';
import './HourCard.css';

const Hour = (props) => {
  console.log(props)
  return (
    <div className='hour-card' >
    { props.hour &&
      <div>
      <h3 className='hour'>{props.hour.FCTTIME.civil}</h3>

      <img src={props.hour.icon_url} />
      <div className='high-low'> 
      <h3>{props.hour.temp.english}</h3>
      </div>
    </div>
  }
  </div>

  )
}

export default Hour;