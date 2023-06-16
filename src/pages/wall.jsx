import Background from '../components/Background.jsx';
import { useState } from 'react';
import NavBar from '../components/wall/NavBar.jsx';
import MenuPage from '../components/MenuPage.jsx';
import Order from '../components/wall/Order.jsx';

const Wall = () => {
    const userRole = localStorage.getItem('userRole');
    const [showOrder, setShowOrder] = useState(false);

    return (
        <>
            {showOrder ? (
                <>
                    <Background />
                    <Order setShowOrder={setShowOrder} />
                </>
            ) : (
                <>
                    <Background />
                    <NavBar setShowOrder={setShowOrder} />
                    {(userRole === 'waiter' || userRole === 'admin') && <MenuPage />}
                </>
            )}
        </>
    );
};

export default Wall;
