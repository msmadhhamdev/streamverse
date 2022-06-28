import { useState } from 'react';

const Trending = () => {
  const [trendingList, setTrendingList] = useState([]);
  return (
    <main>
      <div className="Trending">
        <h1 className='topic'>trending Page</h1>
      </div>
    </main>
  );
};

export default Trending;
