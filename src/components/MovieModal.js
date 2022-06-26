import React from 'react'
import {FaCalendar, FaClock, FaStar, FaTimes} from "react-icons/fa"

const MovieModal = ({content, handleModalClose}) => {
    const IMG_API = 'https://image.tmdb.org/t/p/w500';
  return (
    <div className="MovieModal">
        <div className="modal-body">
            <img className='modal-image' src={IMG_API + content.poster} alt={content.title} />
            <div className="movie-details">
                <div className='movie-profile'>
                    <div className="info">
                        <h1>{content.title}</h1>
                        <p><FaCalendar role='contentinfo' /> {content.date}</p>
                        <p><FaClock role='contentinfo' /> {content.lang.toUpperCase()}</p>
                        <p><FaStar role='contentinfo' style={{'color': '#ffaa00'}} /> {content.vote}</p>
                    </div>
                </div>
                <div className="movie-desc">
                    <h2>Storyline</h2>
                    <p>{content.overview}</p>
                </div>
            </div>
        </div>
        <div className='modal-closer' onClick={handleModalClose}><FaTimes /></div>
    </div>
  )
}

export default MovieModal