
import { RiAdminFill } from 'react-icons/ri';
import PropTypes from 'prop-types';

const AdminBtn = (props) => {

    // Mostrar la vista de admin 
    const handleClick = () =>{
        props.setShowAdminView(true)
    }

    return (
        <button className="btn-admin" >
            <RiAdminFill className="navBar-icon" onClick={handleClick}/>                
        </button>
    );
};

export default AdminBtn;


AdminBtn.propTypes = {
    setShowAdminView: PropTypes.func,
};