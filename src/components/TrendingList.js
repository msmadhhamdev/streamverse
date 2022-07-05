import MovieCard from "./MovieCard"

const TrendingList = ({trendings, handleModal, searchTerm}) => {
  return (
      <>
        {
            trendings.length > 0 ?  trendings.filter(movie => {
                return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            }).map(movie => {
                return <MovieCard
                id={movie.id}
                key={movie.id} 
                title={movie.title} 
                date={movie.release_date} 
                lang={movie.original_language} 
                vote={movie.vote_average}
                overview={movie.overview}
                poster={movie.poster_path}
                handleModal={handleModal} />
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