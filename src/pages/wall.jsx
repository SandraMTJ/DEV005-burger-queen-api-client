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

    return (
        <>
            {showOrder ? (
                <>
                    <Background />
                    <Order 
                    setShowOrder={setShowOrder}
                    allProducts={allProducts}
                    />
                </>
            ) : (
                <>
                    <Background />
                    <NavBar setShowOrder={setShowOrder}/>
                    {(userRole === 'waiter' || userRole === 'admin') && <MenuPage 
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        total={total}
                        setTotal={setTotal}
                        countProducts={countProducts}
                        setCountProducts={setCountProducts}
                        />
                    }
                </>
            )}
        </>
    );
};

export default Wall;
