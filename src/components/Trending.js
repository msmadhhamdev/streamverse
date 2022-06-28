import { useState } from 'react';

const Trending = () => {
  const [trendingList, setTrendingList] = useState([]);
  return (
    <div className='Trending'>
      <h2 className='topic'>Trending Page</h2>
    </div>
  );
};

export default Trending;
