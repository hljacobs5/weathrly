import React from 'react';
import './HourCard.css';

const Hour = (props) => {
  console.log(props)
  return (
    <div className='hour-card' >
      <h3 className='hour'>{props.hour.title}</h3>
      <hr />
      <img src={props.hour.icon_url}/>
      <div className='high-low'>
        <h3>{props.hour.fcttext}</h3>
 
      </div>
    </div>
  )
}

export default Hour;