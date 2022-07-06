import { useEffect, useState } from 'react';
import { FaCalendar, FaClock, FaStar, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const MovieModal = ({ content, handleModalClose }) => {
  const IMG_API = 'https://image.tmdb.org/t/p/w500';
  const [trailerURL, setTrailerURL] = useState('');
  const [trailerSite, setTrailerSite] = useState('YouTube');
  useEffect(() => {
    const fetchTrailer = () => {
      const trailer = axios.get(`https://api.themoviedb.org/3/movie/${content.id}/videos?api_key=82b2f38d627e364a5f470420aa8e8ed3&language=en-US`);
      trailer.then(response => {
        const findTrailer = response.data.results.find(el => el.name.includes('Official Trailer'));
        setTrailerURL(findTrailer.key);
        setTrailerSite(findTrailer.site)
      })
    }
    fetchTrailer();
  }, [trailerURL, content.id])
  return (
    <div className='MovieModal'>
      <div className='modal-body' autoFocus>
        <img
          className='modal-image'
          src={IMG_API + content.poster}
          alt={content.title}
        />
        <div className='movie-details'>
          <div className='movie-profile'>
            <div className='info'>
              <h1>{content.title}</h1>
              <p>
                <FaCalendar role='contentinfo' /> {content.date}
              </p>
              <p>
                <FaClock role='contentinfo' /> {content.lang.toUpperCase()}
              </p>
              <p>
                <FaStar role='contentinfo' style={{ color: '#ffaa00' }} />{' '}
                {content.vote}
              </p>
            </div>
          </div>
          <div className='movie-desc'>
            <h2>Storyline</h2>
            <p>{content.overview}</p>
          </div>
          <div className="trailer">
            <h2>Trailer</h2>
            <iframe src={trailerSite === 'YouTube' ? `https://www.youtube.com/embed/${trailerURL}` : 'htps'} title="IDGAF but without music" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='movie-casts'>
            <h2>Casts</h2>
            <div className="casts-list">
              <img src='' alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='modal-closer' onClick={handleModalClose}>
        <FaTimes />
      </div>
    </div>
  );
};

export default MovieModal;
