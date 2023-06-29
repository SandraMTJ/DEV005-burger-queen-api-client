import OptionsAdmin from "./OptionsAdmin";
import BtnCreateElement from "./BtnCreateElement";
import { CgClose } from 'react-icons/cg';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
const AdminView = (props) => {

    const navigate = useNavigate()
    
     // Mostrar la vista de admin 
     const handleClick = () =>{
        props.setShowAdminView(false)
        navigate('/')
    }

    return (
        <>
            <OptionsAdmin 
                selectedOptionsAdmin = {props.selectedOptionsAdmin} 
                setSelectedOptionsAdmin = {props.setSelectedOptionsAdmin}    
            />
            <BtnCreateElement optionCreate ={ props.optionCreate }/>
            <CgClose  className="icon-close-status" onClick={handleClick}/>
        </>
    );
};

export default AdminView;


AdminView.propTypes = {
    selectedOptionsAdmin: PropTypes.string,
    setSelectedOptionsAdmin: PropTypes.func,
    setShowAdminView: PropTypes.func,
};