import OptionsAdmin from "./OptionsAdmin";
import BtnCreateElement from "./BtnCreateElement";
import { CgClose } from 'react-icons/cg';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import LogoWall from "../wall/LogoWall";
import ListEmployees from "./ListEmployees";
import ListProducts from "./ListProducts";
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
            
            <CgClose  className="icon-close-status" onClick={handleClick}/>
            <div className="container-tables">
                {(props.selectedOptionsAdmin === 'employees') ? (
                    <>
                        <BtnCreateElement optionCreate ={ props.optionCreate } setShowFormUser = {props.setShowFormUser}/>
                        <ListEmployees role = {'admin'}/>
                        <ListEmployees role = {'chef'}/>
                        <ListEmployees role = {'waiter'}/>
                    </>
                ) 
                : (
                    <>
                        <BtnCreateElement optionCreate ={ props.optionCreate } setShowFormProduct = {props.setShowFormProduct}/>
                        <ListProducts type = {'breakfast'}/>
                        <ListProducts type = {'lunch'}/>
                    </>
                )}
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