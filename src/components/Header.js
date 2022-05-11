import PropTypes from 'prop-types';
import { FaTasks } from 'react-icons/fa';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <FaTasks />
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Create'} onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const titleStyling = {
//     'color': '#fff',
//     'background': '#333'
// }

export default Header