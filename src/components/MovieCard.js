import React from 'react'

const MovieCard = (props) => {
  return (
    <div className="Movie">
        <img src={props.imgUrl} alt="" />
        <h4>{props.title}</h4>
        <p>📅19/05/2022</p>
        <p>🕑1h 25m</p>
        <p>⭐{props.rating}</p>
    </div>
  )
}

export default MovieCard