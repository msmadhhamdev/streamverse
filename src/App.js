import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import logo from "./logo.png"
import image from "./drstrange.jpg"
import {FaHome, FaStream, FaIdCard, FaPhone} from "react-icons/fa"
import MovieModal from './components/MovieModal'

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
            id: 1,
            imgUrl: image,
            title: 'Spider-Man: No Way Home',
            duration: '1h 25m',
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            rating: 5
        },
        {
            id: 1,
            imgUrl: image,
            title: 'Spider-Man: No Way Home',
            duration: '1h 25m',
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            rating: 5
        },
        {
            id: 1,
            imgUrl: image,
            title: 'Spider-Man: No Way Home',
            duration: '1h 25m',
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            rating: 5
        },
        {
            id: 1,
            imgUrl: image,
            title: 'Spider-Man: No Way Home',
            duration: '1h 25m',
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            rating: 5
        },
        {
            id: 1,
            imgUrl: image,
            title: 'Spider-Man: No Way Home',
            duration: '1h 25m',
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            rating: 5
        },
        {
            id: 1,
            imgUrl: image,
            title: 'Spider-Man: No Way Home',
            duration: '1h 25m',
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            rating: 5
        },
        {
            id: 1,
            imgUrl: image,
            title: 'Spider-Man: No Way Home',
            duration: '1h 25m',
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            rating: 5
        },
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
    
    const [modalVisibility, setModalVisibility] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const handleInput = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleModal = (title, date, duration, rating, imgUrl) => {
        setModalVisibility(true);
        const newContent = {title: title, date: date, duration: duration, rating: rating, imgUrl: imgUrl};
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
                    {movieList.filter(movie => (
                        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
                    )).map(movie => {
                        return <MovieCard
                        key={movie.id}
                        imgUrl={movie.imgUrl}
                        title={movie.title}
                        rating={movie.rating}
                        date={movie.date}
                        duration={movie.duration}
                        handleModal={handleModal}
                        />
                    })}
                </div>
                {modalVisibility && <MovieModal content={modalContent} />}
            </main>
        </div>
      )
}

export default App