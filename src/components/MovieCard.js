import axios from 'axios';
import React, {useEffect} from 'react'
import {FaCalendar, FaLanguage, FaStar} from "react-icons/fa"

const MovieCard = (props) => {
  const IMG_API = 'https://image.tmdb.org/t/p/w500';
  const fixedTitle = props.title.split('').slice(0, 28).join('') + '...';
  
  return (
    <div className="Movie" onClick={() => props.handleModal(props.title, props.release_date, props.lang, props.vote_average, props.overview, props.poster_path)}>
        <img src={IMG_API + props.poster_path} alt={props.title} />
        <h4>{props.title.length > 28 ? fixedTitle : props.title}</h4>
        <p><FaCalendar role='contentinfo' /> {props.release_date}</p>
        <p><FaLanguage role='contentinfo' /> {props.lang}</p>
        <p><FaStar role='contentinfo' style={{'color': '#ffaa00'}} /> {props.vote_average}</p>
    </div>
  )
}

export default MovieCard