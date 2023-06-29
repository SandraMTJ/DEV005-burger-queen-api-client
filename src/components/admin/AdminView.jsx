import OptionsAdmin from "./OptionsAdmin";
import BtnCreateElement from "./BtnCreateElement";
import { CgClose } from 'react-icons/cg';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import LogoWall from "../wall/LogoWall";
import ListEmployees from "./ListEmployees";
const AdminView = (props) => {

    const navigate = useNavigate()
    
     // Mostrar la vista de admin 
     const handleClick = () =>{
        props.setShowAdminView(false)
        navigate('/')
    }

    return (
        <>
            <LogoWall/>
            <OptionsAdmin 
                selectedOptionsAdmin = {props.selectedOptionsAdmin} 
                setSelectedOptionsAdmin = {props.setSelectedOptionsAdmin} 
                setOptionCreate = { props.setOptionCreate }   
            />
            <BtnCreateElement optionCreate ={ props.optionCreate }/>
            <CgClose  className="icon-close-status" onClick={handleClick}/>
            <div>
                {(props.selectedOptionsAdmin === 'employees') ? (<ListEmployees/>) : ('')}
            </div>
        </>
    );
};

export default AdminView;


AdminView.propTypes = {
    selectedOptionsAdmin: PropTypes.string,
    setSelectedOptionsAdmin: PropTypes.func,
    setShowAdminView: PropTypes.func,
};