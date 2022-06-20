import React from 'react'
import {FaCalendar, FaClock, FaStar} from "react-icons/fa"

const MovieCard = (props) => {
  const fixedTitle = props.title.split('').slice(0, 28).join('') + '...';
  return (
    <div className="Movie">
        <img src={props.imgUrl} alt="" />
        <h4>{props.title.length > 28 ? fixedTitle : props.title}</h4>
        <p><FaCalendar role='contentinfo' /> {props.date}</p>
        <p><FaClock role='contentinfo' /> {props.duration}</p>
        <p><FaStar role='contentinfo' style={{'color': '#ffaa00'}} /> {props.rating}</p>
    </div>
  )
}

export default MovieCard