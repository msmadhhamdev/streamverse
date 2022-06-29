import { FaForward, FaBackward } from 'react-icons/fa';

const PageTracker = ({ page, handleNextPage, handlePrevPage }) => {
  return (
    <div className='page-tracker'>
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
