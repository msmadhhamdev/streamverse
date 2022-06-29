import { useState } from 'react';
import {FaChartPie} from 'react-icons/fa'

const Trending = () => {
  const [trendingList, setTrendingList] = useState([]);
  return (
    <div className='Trending'>
      <h2 className='topic'><FaChartPie style={{marginRight: '10px'}} /> Trending</h2>
    </div>
  );
};

export default Trending;
