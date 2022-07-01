import { FaForward, FaBackward } from 'react-icons/fa';

const PageTracker = ({ page, handleNextPage, handlePrevPage, trackerDisabled }) => {
  return (
    <div className='page-tracker' style={{'display': `${trackerDisabled ? 'none': 'flex'}`}}>
      <button onClick={handlePrevPage} >
        <FaBackward />
      </button>
      <p title={`Page ${page}`}>{page}</p>
      <button onClick={handleNextPage} >
        <FaForward />
      </button>
    </div>
  );
};

export default PageTracker;
