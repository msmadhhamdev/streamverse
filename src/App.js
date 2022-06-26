import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import PageTracker from './components/PageTracker'
import logo from "./logo.png"
import {FaCompass, FaChartPie, FaIdCard, FaPhone} from "react-icons/fa"
import MovieModal from './components/MovieModal'
import axios from 'axios'

const App = () => {
    const [movieList, setMovieList]   = useState([]);

    const [searchTerm, setSearchTerm] = useState('');
    
    const [modalVisibility, setModalVisibility] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const storagePage = localStorage.getItem('page') ? Number.parseInt(localStorage.getItem('page')) : 1;
    const [page, setPage] = useState(storagePage);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=82b2f38d627e364a5f470420aa8e8ed3&language=en-US&page=${page}`);
                setMovieList(response.data.results);
            } catch (error) {
                alert(error.message)
            } finally {
                localStorage.setItem('page', page);
            }
        }
        fetchMovies();
    }, [page]);

    const handleInput = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleModal = (title, date, lang, vote, overview, poster) => {
        setModalVisibility(true);
        const newContent = {title: title, date: date, lang: lang, vote: vote, overview: overview, poster: poster};
        setModalContent(newContent);
    }

    const handleModalClose = () => {
        setModalVisibility(false);
    }

    const handleNextPage = () => {
        setPage(page => {
            return page <= 34054 ? page + 1 : 34054;
        });
        localStorage.setItem('page', page);
    }

    const handlePrevPage = () => {
        setPage(page => {
            return page >= 2 ? page - 1 : 1;
        });
        localStorage.setItem('page', page);
    }
    
    return (
        <div className="App">
            <header>
                <div className='logo'>
                    <img className='logo' src={logo} alt="Streamverse Logo" />
                    Streamverse
                </div>
                <div className='tagline'>
                    Explore all about the most Popular and the Latest Movies
                </div>
            </header>
            <nav>
                <div className='navigator'>
                    <a className='active-link' href="#"><FaCompass role='contentinfo' /> Discover</a>
                    <a href="#"><FaChartPie role='contentinfo' /> Trending</a>
                    <a href="#"><FaIdCard role='contentinfo' /> About</a>
                    <a href="#"><FaPhone role='contentinfo' /> Contact</a>
                </div>
                <PageTracker page={page} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
                <SearchBar searchTerm={searchTerm} handleInput={handleInput} />
            </nav>
            <main>
                <div className="container">
                    {movieList.length > 0 ? (
                        movieList.filter(movie => (
                            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
                        )).map(movie => {
                            return <MovieCard
                            key={movie.id}
                            poster={movie.poster_path}
                            title={movie.title}
                            vote={movie.vote_average}
                            date={movie.release_date}
                            overview={movie.overview}
                            lang={movie.original_language}
                            handleModal={handleModal}
                            />
                        })
                    ) : (
                        <h2 className='movielist-fallback'>Sorry, there are no movies to show!</h2>
                    ) && <div className='spinner'><img src="./logo.png" alt="" /></div>}
                </div>
                {modalVisibility && <MovieModal content={modalContent} handleModalClose={handleModalClose} />}
            </main>
        </div>
      )
}

export default App