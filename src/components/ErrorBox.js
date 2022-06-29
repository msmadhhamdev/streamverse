import {FaWifi} from 'react-icons/fa'

const ErrorBox = ({errorMessage}) => {
    return (
        <div className="error-box">
            <FaWifi style={{fontSize: '1.4em', marginRight: '10px'}} />
            <p>{errorMessage}, try reloading the page.</p>
        </div>
     );
}
 
export default ErrorBox;