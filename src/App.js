import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import image from "./drstrange.jpg"
import {FaHome, FaStream, FaIdCard, FaPhone} from "react-icons/fa"

const App = () => {
    const date = new Date();
    const [movieList, setMovieList]   = useState([
        {
            id: 1,
            imgUrl: image,
            title: 'Spider-Man: No Way Home',
            duration: '1h 25m',
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            rating: 5
        },
        {
            id: 2,
            imgUrl: image,
            title: 'Dr.Strange in the Multiver of Madness',
            duration: '1h 10m',
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            rating: 4
        },
        {
            id: 3,
            imgUrl: image,
            title: 'Avatar 2: The way of Water',
            duration: '2h 15m',
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            rating: 3
        },
        {
            id: 4,
            imgUrl: image,
            title: 'Beast',
            duration: '1h 35m',
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            rating: 8
        },
        {
            id: 5,
            imgUrl: image,
            title: 'Spider-Man: No Way Home',
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            duration: '2h 25m',
            rating: 1
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const handleInput = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="App">
            <header>
                <div className='logo'>
                    Streamverse <br /> <span>Stream the most popular and the latest Movies</span>
                </div>
            </header>
            <nav>
                <div className='navigator'>
                    <a className='active-link' href="#"><FaHome role='contentinfo' /> Home</a>
                    <a href="#"><FaStream role='contentinfo' /> Streamer</a>
                    <a href="#"><FaIdCard role='contentinfo' /> About</a>
                    <a href="#"><FaPhone role='contentinfo' /> Contact</a>
                </div>
                <SearchBar searchTerm={searchTerm} handleInput={handleInput} />
            </nav>
            <main>
                <div className="container">
                    {movieList.filter(movie => (
                        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
                    )).map(movie => {
                        return <MovieCard key={movie.id} imgUrl={movie.imgUrl} title={movie.title} rating={movie.rating} date={movie.date} duration={movie.duration} />
                    })}
                </div>
            </main>
        </div>
      )
}

export default App