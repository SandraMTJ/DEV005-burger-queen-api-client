
import { FiCheckSquare } from 'react-icons/fi';

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