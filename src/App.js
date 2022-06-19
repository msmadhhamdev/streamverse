import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import image from "./drstrange.jpg"
import {FaHome, FaStream, FaIdCard, FaPhone} from "react-icons/fa"

const App = () => {
    const [movieList, setMovieList]   = useState([
        {
            id: 1,
            imgUrl: image,
            title: 'Spider-Man: No Way Home',
            rating: 5
        },
        {
            id: 2,
            imgUrl: image,
            title: 'Dr.Strange in the Multiver of Madness',
            rating: 4
        },
        {
            id: 3,
            imgUrl: image,
            title: 'Avatar 2: The way of Water',
            rating: 3
        },
        {
            id: 4,
            imgUrl: image,
            title: 'Beast',
            rating: 8
        },
        {
            id: 5,
            imgUrl: image,
            title: 'Spider-Man: No Way Home',
            rating: 1
        }
    ])
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
                <SearchBar />
            </nav>
            <main>
                <div className="container">
                    {movieList.map(movie => {
                        return <MovieCard key={movie.id} imgUrl={movie.imgUrl} title={movie.title} rating={movie.rating} />
                    })}
                </div>
            </main>
        </div>
      )
}

export default App