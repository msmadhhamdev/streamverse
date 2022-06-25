import React from 'react'
import {FaForward, FaBackward} from 'react-icons/fa'

const PageTracker = ({page, setPage, handleNextPage, handlePrevPage}) => {
  return (
    <div className='page-tracker'>
         <button onClick={handlePrevPage} title='Previous Page'><FaBackward /></button>
         <p title='Current Page'>{page}</p>
         <button onClick={handleNextPage} title='Next Page'><FaForward /></button>
    </div>
  )
}

export default PageTracker