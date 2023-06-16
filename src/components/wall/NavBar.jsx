import Logout from '../Logout.jsx';
import OrderBtn from './OrderBtn.jsx';
import StatusBtn from './StatusBtn.jsx';
import AdminBtn from './AdminBtn.jsx';
import LogoWall from './LogoWall.jsx';

const NavBar = ({ setShowOrder }) => {
    const userRole = localStorage.getItem('userRole');
    return (
        <>
        <LogoWall />        
            <div className='container-btns'>
                {userRole === 'admin' && <AdminBtn />}
                {(userRole === 'waiter' || userRole === 'admin') && <StatusBtn />}
                {(userRole === 'waiter' || userRole === 'admin') && <OrderBtn setShowOrder={setShowOrder} />}
                <Logout />
            </div>
        </>
    );
};

export default NavBar;


