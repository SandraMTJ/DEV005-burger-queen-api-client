import Background from '../components/Background.jsx';
import { useState } from 'react';
import NavBar from '../components/wall/NavBar.jsx';
import { MenuPage } from '../components/MenuPage.jsx';
import Order from '../components/wall/Order.jsx';
import Status from '../components/wall/Status.jsx';
import StatusOrderChef from '../components/wall/StatusOrderChef.jsx';
import ChefOrders from '../components/wall/ChefOrders.jsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Wall = (props) => {
    const navigate = useNavigate();
    const userRole = localStorage.getItem('userRole');
    const [showOrder, setShowOrder] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
    const [clientName, setClientName] = useState('');
    const [clientNameError, setClientNameError] = useState('');
    const [showModalOrder, setShowModalOrder] = useState(false);
    const [showStatus, setShowStatus] = useState(false);
    const [selectedOrderStatusChef, setSelectedOrderStatusChef] = useState('pending');  
    const [countOrdersReady, setCountOrdersReady] = useState(0);  
    
    
    // Si showAdmin view es verdadero, mostrarlo
    useEffect(() => {
        if (props.showAdminView) {
            navigate('/admin');
        }
    }, [props.showAdminView, navigate]);

    let componentToRender;
    // Si showOrder es verdadero, se muestra
    if (showOrder) {
        componentToRender = (
            <Order 
                setShowOrder={setShowOrder}
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
                clientName={clientName}
                setShowModalOrder={setShowModalOrder}                    
            />
        );
    } 
    //Si showStatus es verdadero, se muestra 
    else if (showStatus){
        componentToRender = (
            <Status setShowStatus = {setShowStatus} />
        );
    // Si showAdminView es verdadero, se muestra el navbar y el AdminView
    
    }else {
        componentToRender = (
            <>  
                
                <NavBar 
                    setShowOrder={setShowOrder}
                    countProducts={countProducts}
                    clientName={clientName}
                    setClientNameError={setClientNameError}
                    setShowStatus={setShowStatus}
                    countOrdersReady = {countOrdersReady}
                    setCountOrdersReady = {setCountOrdersReady}
                    setShowAdminView = { props.setShowAdminView }
                />

                {/* Si el role del usuario es waiter o admin, se muestra menupage */}
                {(userRole === 'waiter' || userRole === 'admin') && (
                    <MenuPage 
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        total={total}
                        setTotal={setTotal}
                        countProducts={countProducts}
                        setCountProducts={setCountProducts}
                        setClientName={setClientName}
                        clientNameError={clientNameError}
                        setClientNameError={setClientNameError}
                        showModalOrder={showModalOrder}
                        setShowModalOrder={setShowModalOrder}
                    />
                )}
                {/* Si el role del usuario es chef, se muestra StatusOrderChef y ChefOrders */}
                {(userRole === 'chef') && (
                    <>
                        <StatusOrderChef selectedOrderStatusChef = {selectedOrderStatusChef} setSelectedOrderStatusChef = {setSelectedOrderStatusChef}/>
                        <ChefOrders selectedOrderStatusChef = {selectedOrderStatusChef}/>
                    </>
                )}
            </>
        );
    }

    return (
        <>
            <Background />
            {componentToRender}
            
        </>
    );
};

export default Wall;


Wall.propTypes = {
    setShowAdminView: PropTypes.func,
    showAdminView: PropTypes.bool
};