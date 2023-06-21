import Background from '../components/Background.jsx';
import { useState } from 'react';
import NavBar from '../components/wall/NavBar.jsx';
import MenuPage from '../components/MenuPage.jsx';
import Order from '../components/wall/Order.jsx';

const Wall = () => {
    const userRole = localStorage.getItem('userRole');
    const [showOrder, setShowOrder] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
    const [clientName, setClientName] = useState('');
    const [clientNameError, setClientNameError] = useState('');
    const [showModalOrder, setShowModalOrder] = useState(false);

  
    return (
        <>
            {showOrder ? (
                <>
                    <Background />
                    <Order 
                    setShowOrder={setShowOrder}
                    allProducts={allProducts}
                    setAllProducts={setAllProducts}
                    total={total}
                    setTotal={setTotal}
                    countProducts={countProducts}
                    setCountProducts={setCountProducts}
                    clientName = {clientName}
                    setShowModalOrder = {setShowModalOrder}
                    />
                </>
            ) : (
                <>
                    <Background />
                    <NavBar 
                        setShowOrder={setShowOrder}
                        countProducts={countProducts}
                        clientName = {clientName}
                        setClientNameError = {setClientNameError}
                    />
                    {(userRole === 'waiter' || userRole === 'admin') && <MenuPage 
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        total={total}
                        setTotal={setTotal}
                        countProducts={countProducts}
                        setCountProducts={setCountProducts}
                        setClientName = {setClientName}
                        clientNameError = {clientNameError}
                        setClientNameError = {setClientNameError}
                        showModalOrder = {showModalOrder}
                        setShowModalOrder = {setShowModalOrder}
                        />
                    }
                </>
            )}
        </>
    );
};

export default Wall;
