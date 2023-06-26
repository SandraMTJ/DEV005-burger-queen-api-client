
import { FiCheckSquare } from 'react-icons/fi';
import PropTypes from 'prop-types';

const StatusBtn = (props) => {

    const handleClick = () =>{
        props.setShowStatus('true')
    }

    return (
            <button className="btn-navBar" onClick = {handleClick}>
                <FiCheckSquare className="navBar-icon" />
                Status
            </button>
    );
};

export default StatusBtn;

StatusBtn.propTypes = {
    setShowStatus: PropTypes.func,
};