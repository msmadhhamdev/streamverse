import React from 'react'
import {FaCalendar, FaLanguage, FaStar} from "react-icons/fa"

const MovieCard = (props) => {
  const fixedTitle = props.title.split('').slice(0, 28).join('') + '...';
  return (
    <div className="Movie" onClick={() => props.handleModal(props.title, props.date, props.lang, props.rating, props.overview, props.img)}>
        <img src={props.img} alt="" />
        <h4>{props.title.length > 28 ? fixedTitle : props.title}</h4>
        <p><FaCalendar role='contentinfo' /> {props.date}</p>
        <p><FaLanguage role='contentinfo' /> {props.lang}</p>
        <p><FaStar role='contentinfo' style={{'color': '#ffaa00'}} /> {props.rating}</p>
    </div>
  )
}

export default MovieCard