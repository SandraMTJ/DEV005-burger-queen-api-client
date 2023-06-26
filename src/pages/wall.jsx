import Background from '../components/Background.jsx';
import { useState } from 'react';
import NavBar from '../components/wall/NavBar.jsx';
import MenuPage from '../components/MenuPage.jsx';
import Order from '../components/wall/Order.jsx';
import Status from '../components/wall/Status.jsx';
import StatusOrderChef from '../components/wall/StatusOrderChef.jsx';
import ChefOrders from '../components/wall/ChefOrders.jsx';

const Wall = () => {
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
    
  
    let componentToRender;

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
        } else if (showStatus){
            componentToRender = (
                <Status setShowStatus = {setShowStatus}/>
            );
        } else {
            componentToRender = (
                <>
                    <NavBar 
                        setShowOrder={setShowOrder}
                        countProducts={countProducts}
                        clientName={clientName}
                        setClientNameError={setClientNameError}
                        setShowStatus={setShowStatus}
                    />


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

                    {(userRole === 'chef') && (
                        <>
                            <StatusOrderChef selectedOrderStatusChef = {selectedOrderStatusChef} setSelectedOrderStatusChef = {setSelectedOrderStatusChef}/>
                            <ChefOrders selectedOrderStatusChef = {selectedOrderStatusChef} />
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
