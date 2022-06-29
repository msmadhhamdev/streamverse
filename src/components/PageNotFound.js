import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import {FaArrowLeft} from 'react-icons/fa'

const PageNotFound = () => {
  const location = useLocation();
  return (
    <div className="page-not-found">
      <div className="pnf-content">
        <h1>☠️ Oops!</h1>
        <h3>The page ({location.pathname}) you are trying to navigate does not exists!</h3>
        <Link to='/'><FaArrowLeft /> Back to Home</Link>
      </div>
    </div>
  )
}

export default PageNotFound