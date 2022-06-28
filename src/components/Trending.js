import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Trending = () => {
  const [trendingList, setTrendingList] = useState([]);
  const {pathname} = useLocation();
  return (
    <div className='Trending'>
      <h2 className='topic'>Trending</h2>
    </div>
  );
};

export default Trending;
