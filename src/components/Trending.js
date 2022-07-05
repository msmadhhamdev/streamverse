import { useEffect } from 'react';
import TrendingList from './TrendingList';
import {FaChartPie} from 'react-icons/fa'
import axios from 'axios';

const Trending = ({page, handleModal, trendingList, setTrendingList, searchTerm}) => {
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=82b2f38d627e364a5f470420aa8e8ed3&page=${page}`).then(data => {
      setTrendingList(data.data.results);
    })
  }, [trendingList, page, setTrendingList]);
  return (
    <div className='Trending'>
      <h2 className='topic'><FaChartPie style={{marginRight: '10px'}} /> Trending</h2>
      <TrendingList trendings={trendingList} handleModal={handleModal} searchTerm={searchTerm} />
    </div>
  );
};

export default Trending;
