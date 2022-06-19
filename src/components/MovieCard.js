import React from 'react'
import {FaCalendar, FaClock, FaStar} from "react-icons/fa"

const MovieCard = (props) => {
  return (
    <div className="Movie">
        <img src={props.imgUrl} alt="" />
        <h4>{props.title}</h4>
        <p><FaCalendar role='contentinfo' /> 19/05/2022</p>
        <p><FaClock role='contentinfo' /> 1h 25m</p>
        <p><FaStar role='contentinfo' /> {props.rating}</p>
    </div>
  )
}

export default MovieCard