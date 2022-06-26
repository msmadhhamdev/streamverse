import {FaCalendar, FaLanguage, FaStar} from "react-icons/fa"

const MovieCard = (props) => {
  const IMG_API = 'https://image.tmdb.org/t/p/w500';
  const fixedTitle = props.title.split('').slice(0, 28).join('') + '...';
  
  return (
    <div className="Movie" tabIndex={0} onClick={() => props.handleModal(props.id, props.title, props.date, props.lang, props.vote, props.overview, props.poster)}>
        <img src={IMG_API + props.poster} alt={props.title} />
        <h4>{props.title.length > 28 ? fixedTitle : props.title}</h4>
        <p><FaCalendar role='contentinfo' /> {props.date}</p>
        <p><FaLanguage role='contentinfo' /> {props.lang.toUpperCase()}</p>
        <p><FaStar role='contentinfo' style={{'color': '#ffaa00'}} /> {props.vote}</p>
    </div>
  )
}

export default MovieCard