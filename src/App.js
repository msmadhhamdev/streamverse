import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import logo from "./logo.png"
import drStrange from './drstrange.jpg'
import {FaHome, FaStream, FaIdCard, FaPhone} from "react-icons/fa"
import MovieModal from './components/MovieModal'
import axios from 'axios'

const App = () => {
    const [movieList, setMovieList]   = useState([
        {
            id: 20,
            title: 'Uncharted',
            overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sit voluptates, facere nulla possimus eveniet iusto. Eligendi consequatur nam harum ratione mollitia itaque tempora in aliquam cum? Ab, assumenda repellat!',
            release_date: '23-04-2012',
            vote_average: 8.3,
            original_language: 'jp',
            poster_path: drStrange
        },
        {
            id: 21,
            title: 'Morbius',
            overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sit voluptates, facere nulla possimus eveniet iusto. Eligendi consequatur nam harum ratione mollitia itaque tempora in aliquam cum? Ab, assumenda repellat!',
            release_date: '31-04-2016',
            vote_average: 3.8,
            original_language: 'eu',
            poster_path: drStrange
        },
        {
            id: 22,
            title: 'Pokemon',
            overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sit voluptates, facere nulla possimus eveniet iusto. Eligendi consequatur nam harum ratione mollitia itaque tempora in aliquam cum? Ab, assumenda repellat!',
            release_date: '12-01-2010',
            vote_average: 2.8,
            original_language: 'en',
            poster_path: drStrange
        },
        {
            id: 23,
            title: 'Naruto: Boruto The next generations',
            overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sit voluptates, facere nulla possimus eveniet iusto. Eligendi consequatur nam harum ratione mollitia itaque tempora in aliquam cum? Ab, assumenda repellat!',
            release_date: '05-09-2003',
            vote_average: 7.8,
            original_language: 'en',
            poster_path: drStrange
        },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    
    const [modalVisibility, setModalVisibility] = useState(false);
    const [modalContent, setModalContent] = useState({});

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=82b2f38d627e364a5f470420aa8e8ed3&language=en-US');
                console.log(response)
                setMovieList(response.data.results)
            } catch (error) {
                console.log(error.response.data);
            }
        }
        fetchMovies();
    }, []);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie//images?api_key=82b2f38d627e364a5f470420aa8e8ed3&language=en-US');
                console.log(response)
                setMovieList(response.data.results)
            } catch (error) {
                console.log(error.response.data);
            }
        }
        fetchImages();
    }, []);

    const handleInput = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleModal = (title, date, lang, rating, overview, img) => {
        setModalVisibility(true);
        const newContent = {title: title, date: date, lang: lang, rating: rating, overview: overview, poster_path: img};
        setModalContent(newContent);
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
                            img={movie.poster_path}
                            title={movie.title}
                            rating={movie.vote_average}
                            date={movie.release_date}
                            overview={movie.overview}
                            lang={movie.original_language}
                            handleModal={handleModal}
                            />
                        })
                    ) : (
                        <h2>Sorry, there are no movies to show!</h2>
                    )}
                </div>
                {modalVisibility && <MovieModal content={modalContent} />}
            </main>
        </div>
      )
}

export default App