import React from 'react'
import {FaCalendar, FaClock, FaStar} from "react-icons/fa"

const MovieModal = ({content}) => {
  return (
    <div className="MovieModal">
        <div className="modal-body">
            <div className='movie-profile'>
                <img src={content.imgUrl} alt="" loading='lazy' />
                <div className="info">
                    <h1>{content.title}</h1>
                    <p><FaCalendar role='contentinfo' /> {content.date}</p>
                    <p><FaClock role='contentinfo' /> {content.duration}</p>
                    <p><FaStar role='contentinfo' style={{'color': '#ffaa00'}} /> {content.rating}</p>
                </div>
            </div>
            <div className="movie-desc">
                <h1>Description</h1>
                <h2>Storyline</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cumque eius quasi magnam aliquid debitis earum tenetur, ullam architecto. Consequuntur dolorum quod, non incidunt maxime iure assumenda fugiat aliquid mollitia.</p>
            </div>
        </div>
    </div>
  )
}

export default MovieModal