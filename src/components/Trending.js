import { useEffect, useState } from 'react';
import TrendingList from './TrendingList';
import {FaChartPie} from 'react-icons/fa'
import axios from 'axios';

const Trending = ({page}) => {
  const [trendingList, setTrendingList] = useState([]);
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=82b2f38d627e364a5f470420aa8e8ed3&page=${page}`).then(data => {
      setTrendingList(data.data.results);
    })
  }, [trendingList]);
  return (
    <div className='Trending'>
      <h2 className='topic'><FaChartPie style={{marginRight: '10px'}} /> Trending</h2>
      <TrendingList trendings={trendingList} />
    </div>
  );
};

export default Trending;
