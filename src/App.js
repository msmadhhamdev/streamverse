import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import PageTracker from './components/PageTracker'
import logo from "./logo.png"
import {FaHome, FaStream, FaIdCard, FaPhone} from "react-icons/fa"
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
                console.log(response)
                setMovieList(response.data.results);
            } catch (error) {
                console.log(error.response.data);
            } finally {
                localStorage.setItem('page', page);
            }
        }
        fetchMovies();
    }, [page]);

    const handleInput = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleModalOpen = (title, release_date, lang, vote_average, overview, poster_path) => {
        setModalVisibility(true);
        const newContent = {title: title, date: release_date, lang: lang, vote_average: vote_average, overview: overview, poster_path: poster_path};
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
                    <a className='active-link' href="#"><FaHome role='contentinfo' /> Home</a>
                    <a href="#"><FaStream role='contentinfo' /> Updates</a>
                    <a href="#"><FaIdCard role='contentinfo' /> About</a>
                    <a href="#"><FaPhone role='contentinfo' /> Contact</a>
                </div>
                <PageTracker page={page} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
                <SearchBar searchTerm={searchTerm} handleInput={handleInput} />
            </nav>
            <main>
                <h1 className='topic'>Discover</h1>
                <div className="container">
                    {movieList.length > 0 ? (
                        movieList.filter(movie => (
                            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
                        )).map(movie => {
                            return <MovieCard
                            key={movie.id}
                            poster_path={movie.poster_path}
                            title={movie.title}
                            vote_average={movie.vote_average}
                            release_date={movie.release_date}
                            overview={movie.overview}
                            lang={movie.original_language}
                            handleModalOpen={handleModalOpen}
                            />
                        })
                    ) : (
                        <h2 className='movielist-fallback'>Sorry, there are no movies to show!</h2>
                    ) && <p>Loading...</p>}
                </div>
                {modalVisibility && <MovieModal content={modalContent} handleModalClose={handleModalClose} />}
            </main>
        </div>
      )
}

export default App