import Background from "../components/Background.jsx";
import AdminView from "../components/admin/AdminView.jsx";
import FormNewUser from "../components/admin/FormNewUser.jsx";
import FormNewProduct from "../components/admin/FormNewProduct.jsx";
import { useState } from "react";
import PropTypes from 'prop-types';
import LogoWall from "../components/wall/LogoWall.jsx";
import FormEditUser from "../components/admin/FormEditUser.jsx";
import FormEditProduct from "../components/admin/FormEditProduct.jsx";

const Admin = (props) => {    
    const [selectedOptionsAdmin, setSelectedOptionsAdmin] = useState('employees');  
    const [optionCreate, setOptionCreate] = useState('employee');
    const [showFormUser, setShowFormUser] = useState(false);
    const [showFormProduct, setShowFormProduct] = useState(false);
    const [showFormEditUser, setShowFormEditUser] = useState(false);
    const [selectedUser, setSelectedUser] = useState('');
    const [showFormEditProduct, setShowFormEditProduct] = useState(false);
    const [selectedProductEdit, setSelectedProductEdit] = useState('');
    const [showToastify, setShowToastify] = useState(false)
  
    let componentToRender;

    if(showFormUser){
       componentToRender = (
            <>
                <LogoWall/>
                <FormNewUser setShowFormUser = {setShowFormUser}/>
            </>         
       ) 
    } else if (showFormProduct){
        componentToRender = (
            <>
                <LogoWall/>
                <FormNewProduct setShowToastify = {setShowToastify} setShowFormProduct = {setShowFormProduct} />
            </>
        )
    } else if (showFormEditUser){
        componentToRender = (
            <>
                <LogoWall/>
                <FormEditUser setShowFormEditUser = {setShowFormEditUser} selectedUser = {selectedUser}/>
            </>
        )
    } else if (showFormEditProduct){
        componentToRender = (
            <>
                <LogoWall/>
                <FormEditProduct setShowFormEditProduct = {setShowFormEditProduct} selectedProductEdit = {selectedProductEdit}/>
            </>
        )
    }else {
        componentToRender = (
            <AdminView 
            selectedOptionsAdmin = {selectedOptionsAdmin} 
            setSelectedOptionsAdmin = {setSelectedOptionsAdmin}
            optionCreate ={ optionCreate }
            setOptionCreate ={ setOptionCreate }
            setShowAdminView = {props.setShowAdminView}
            showFormUser = {showFormUser}
            setShowFormUser = {setShowFormUser}
            showFormProduct = {showFormProduct}
            setShowFormProduct = {setShowFormProduct}
            setShowFormEditUser = {setShowFormEditUser}
            setSelectedUser = {setSelectedUser}
            setSelectedProductEdit = {setSelectedProductEdit}
            setShowFormEditProduct = {setShowFormEditProduct}
            showToastify = {showToastify}

            /> 
        )
    }
    
    return (
        <>        
            <Background />
            {componentToRender}          
        </>
    );
};

export default Admin;


Admin.propTypes = {
    setShowAdminView: PropTypes.func,
};