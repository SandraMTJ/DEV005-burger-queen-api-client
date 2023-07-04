import OptionsAdmin from "./OptionsAdmin";
import BtnCreateElement from "./BtnCreateElement";
import { CgClose } from 'react-icons/cg';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import LogoWall from "../wall/LogoWall";
import ListEmployees from "./ListEmployees";
import ListProducts from "./ListProducts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AdminView = (props) => {


    const navigate = useNavigate()
    
     // Mostrar la vista de admin 
     const handleClick = () =>{
        props.setShowAdminView(false)
        navigate('/')
    }

    toast.success('Product created successfully', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });     

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
                        <ListEmployees 
                            role = {'admin'} 
                            setShowFormEditUser = {props.setShowFormEditUser} 
                            setSelectedUser = {props.setSelectedUser}
                        />
                        <ListEmployees 
                            role = {'chef'} 
                            setShowFormEditUser = {props.setShowFormEditUser} 
                            setSelectedUser = {props.setSelectedUser}
                        />
                        <ListEmployees 
                            role = {'waiter'} 
                            setShowFormEditUser = {props.setShowFormEditUser} 
                            setSelectedUser = {props.setSelectedUser}
                        />
                    </>
                ) 
                : (
                    <>  
                        {props.showToastify && <ToastContainer />}
                        <BtnCreateElement optionCreate ={ props.optionCreate } setShowFormProduct = {props.setShowFormProduct}/>
                        <ListProducts 
                        type = {'breakfast'} 
                        setShowFormEditProduct = {props.setShowFormEditProduct} 
                        setSelectedProductEdit = {props.setSelectedProductEdit}
                        />
                        <ListProducts 
                        type = {'lunch'}
                        setShowFormEditProduct = {props.setShowFormEditProduct} 
                        setSelectedProductEdit = {props.setSelectedProductEdit}
                        />
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
    setOptionCreate: PropTypes.func, 
    optionCreate: PropTypes.string,
    setShowFormProduct: PropTypes.func,
    setShowFormUser: PropTypes.func,
    setSelectedProductEdit: PropTypes.func,
    setShowFormEditProduct: PropTypes.func,
    showToastify: PropTypes.bool,
    setSelectedUser: PropTypes.func,
    setShowFormEditUser: PropTypes.func,
};