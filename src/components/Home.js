import MovieCard from './MovieCard';
import {FaCompass} from 'react-icons/fa'

const Home = ({searchTerm, movieList, setModalContent, setModalVisibility}) => {

    const handleModal = (id, title, date, lang, vote, overview, poster) => {
        setModalVisibility(true);
        const newContent = {
          id: id,
          title: title,
          date: date,
          lang: lang,
          vote: vote,
          overview: overview,
          poster: poster,
        };
        setModalContent(newContent);
      };

      return ( 
          <div className='Home'>
            <h2 className='topic'><FaCompass style={{marginRight: '10px'}} /> Discover</h2>
            {movieList.length > 0
                ? movieList
                    .filter((movie) =>
                    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((movie) => {
                    return (
                        <MovieCard
                        id={movie.id}
                        key={movie.id}
                        poster={movie.poster_path}
                        title={movie.title}
                        vote={movie.vote_average}
                        date={movie.release_date}
                        overview={movie.overview}
                        lang={movie.original_language}
                        handleModal={handleModal}
                        />
                    );
                    })
                : (
                    <h2 className='movielist-fallback'>
                    Sorry, there are no movies to show!
                    </h2>
                ) && (
                    <div className='spinner'>
                    <img src='./logo.png' alt='Loading...' />
                    </div>
                )}
        </div>
     );
}
 
export default Home;