import {FaWifi} from 'react-icons/fa'

const ErrorBox = ({errorMessage}) => {
    return (
        <div className="error-box">
            <FaWifi style={{fontSize: '1.4em', marginRight: '10px'}} />
            <h3>{errorMessage}, try reloading the page!</h3>
        </div>
     );
}
 
export default ErrorBox;