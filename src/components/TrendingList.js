import MovieCard from "./MovieCard"

const TrendingList = ({trendings}) => {
  return (
      <>
        {
            trendings.length > 0 ? trendings.map(movie => {
                return <MovieCard
                key={movie.id} 
                title={movie.title} 
                date={movie.release_date} 
                lang={movie.original_language} 
                vote={movie.vote_average} 
                poster={movie.poster_path} />
            }) : (
                <h2 className='movielist-fallback'>
                Sorry, there are no movies to show!
                </h2>
            ) && (
                <div className='spinner'>
                <img src='./logo.png' alt='Loading...' />
                </div>
            )
        }
      </>
  )
}

export default TrendingList