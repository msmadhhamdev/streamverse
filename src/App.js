import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Home from './components/Home';
import PageTracker from './components/PageTracker';
import Trending from './components/Trending';
import logo from './logo.png';
import { FaCompass, FaChartPie, FaIdCard, FaPhone } from 'react-icons/fa';
import MovieModal from './components/MovieModal';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
    const [movieList, setMovieList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [modalVisibility, setModalVisibility] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const storagePage = localStorage.getItem('page')
        ? Number.parseInt(localStorage.getItem('page'))
        : 1;
    const [page, setPage] = useState(storagePage);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=82b2f38d627e364a5f470420aa8e8ed3&language=en-US&page=${page}`
        );
        console.log(response);
        setMovieList(response.data.results);
      } catch (error) {
        alert(error.message);
      } finally {
        localStorage.setItem('page', page);
      }
    };
    fetchMovies();
  }, [page]);

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleModalClose = () => {
    setModalVisibility(false);
  };

  const handleNextPage = () => {
    setPage((page) => {
      return page <= 34054 ? page + 1 : 34054;
    });
    localStorage.setItem('page', page);
  };

  const handlePrevPage = () => {
    setPage((page) => {
      return page >= 2 ? page - 1 : 1;
    });
    localStorage.setItem('page', page);
  };

  return (
      <Router>
        <div className='App'>
            <header>
                <div className='logo'>
                <img className='logo' src={logo} alt='Streamverse Logo' />
                Streamverse
                </div>
                <div className='tagline'>
                Explore all about the most Popular and the Latest Movies
                </div>
            </header>
            <nav>
                <div className='navigator'>
                <Link className='active-link' to='/'>
                    <FaCompass role='contentinfo' /> Discover
                </Link>
                <Link to='/trending'>
                    <FaChartPie role='contentinfo' /> Trending
                </Link>
                <Link to='/about'>
                    <FaIdCard role='contentinfo' /> About
                </Link>
                <Link to='/contact'>
                    <FaPhone role='contentinfo' /> Contact
                </Link>
                </div>
                <PageTracker
                page={page}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                />
                <SearchBar searchTerm={searchTerm} handleInput={handleInput} />
            </nav>
            <main>
                <Routes>
                    <Route path='/' element={
                        <Home
                        movieList={movieList} 
                        searchTerm={searchTerm}
                        modalVisibility={modalVisibility}
                        modalContent={modalContent}
                        setModalVisibility={setModalVisibility}
                        setModalContent={setModalContent}
                        />
                    } />
                    <Route path='/trending' element={<Trending />} />
                 </Routes>
            </main>
            {modalVisibility && (
            <MovieModal
                content={modalContent}
                handleModalClose={handleModalClose}
            />
            )}
        </div>
    </Router>
  );
};

export default App;
