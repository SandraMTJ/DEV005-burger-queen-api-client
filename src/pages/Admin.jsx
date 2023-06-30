import Background from "../components/Background.jsx";
import AdminView from "../components/admin/AdminView.jsx";
import FormNewUser from "../components/admin/FormNewUser.jsx";
import { useState } from "react";
import PropTypes from 'prop-types';

const Admin = (props) => {    
    const [selectedOptionsAdmin, setSelectedOptionsAdmin] = useState('employees');  
    const [optionCreate, setOptionCreate] = useState('employee');
    const [showFormUser, setShowFormUser] = useState(false);
    const [showFormProduct, setShowFormProduct] = useState(false);
    let componentToRender;

    if(showFormUser){
       componentToRender = (
            <FormNewUser setShowFormUser = {setShowFormUser}/>
       ) 
    } else {
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