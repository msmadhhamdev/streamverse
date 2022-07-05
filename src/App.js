import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Home from './components/Home';
import PageTracker from './components/PageTracker';
import Trending from './components/Trending';
import MovieModal from './components/MovieModal';
import ErrorBox from './components/ErrorBox';
import About from './components/About';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import logo from './images/logo.png';
import axios from 'axios';
import { FaCompass, FaChartPie, FaIdCard, FaPhone } from 'react-icons/fa';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

const App = () => {
    const [movieList, setMovieList] = useState([]);
    const [trendingList, setTrendingList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [modalVisibility, setModalVisibility] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const [error, setError] = useState(null);

    const storagePage = localStorage.getItem('page')
        ? Number.parseInt(localStorage.getItem('page'))
        : 1;
    const [page, setPage] = useState(storagePage);
    const [trackerDisabled, setTrackerDisabled] = useState(false);
    const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=82b2f38d627e364a5f470420aa8e8ed3&language=en-US&page=${page}`
        );
        setMovieList(response.data.results);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        localStorage.setItem('page', page);
      }
    };
    fetchMovies();
    const handleTitleBar = () => {
      if (location.pathname === '/') {
          document.title = 'STREAMVERSE | Discover';
      }
      if (location.pathname === '/trending') {
          document.title = 'STREAMVERSE | Trending';
      }
  }
  handleTitleBar();
  const trackerFunction = () => {
    location.pathname === '/about' || location.pathname === '/contact' ? setTrackerDisabled(true) : setTrackerDisabled(false);
  }
  trackerFunction();
  }, [page, location.pathname]);

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

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
                <Link to='/'>
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
                trackerDisabled={trackerDisabled}
                />
                {(location.pathname === '/' || location.pathname === '/trending') && <SearchBar searchTerm={searchTerm} handleInput={handleInput} />}
            </nav>
            <main>
                <Routes>
                    <Route path='/' element={
                        <Home
                        movieList={movieList} 
                        searchTerm={searchTerm}
                        modalVisibility={modalVisibility}
                        modalContent={modalContent}
                        handleModal={handleModal}
                        trendingList={trendingList}
                        />
                    } />
                    <Route path='/trending' element={<Trending trendingList={trendingList} setTrendingList={setTrendingList} page={page} handleModal={handleModal} searchTerm={searchTerm} />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<PageNotFound />} />
                 </Routes>
            </main>
            {modalVisibility && (
            <MovieModal
                content={modalContent}
                handleModalClose={handleModalClose}
            />
            )}
            {error && <ErrorBox errorMessage={error} />}
        </div>
  );
};

export default App;
