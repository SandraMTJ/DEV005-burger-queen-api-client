import Background from "../components/Background.jsx";
import AdminView from "../components/admin/AdminView.jsx";
import { useState } from "react";
import PropTypes from 'prop-types';

const Admin = (props) => {    
    const [selectedOptionsAdmin, setSelectedOptionsAdmin] = useState('employees');  
    const [optionCreate, setOptionCreate] = useState('employee');
    return (
        <>        
            <Background />
           
            <AdminView 
                selectedOptionsAdmin = {selectedOptionsAdmin} 
                setSelectedOptionsAdmin = {setSelectedOptionsAdmin}
                optionCreate ={ optionCreate }
                setOptionCreate ={ setOptionCreate }
                setShowAdminView = {props.setShowAdminView}
            /> 
            
        </>
    );
};

export default Admin;


Admin.propTypes = {
    setShowAdminView: PropTypes.func,
};