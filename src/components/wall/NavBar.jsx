import Logout from '../Logout.jsx';
import OrderBtn from './OrderBtn.jsx';
import StatusBtn from './StatusBtn.jsx';
import AdminBtn from './AdminBtn.jsx';
import LogoWall from './LogoWall.jsx';

const NavBar = ( props ) => {
    const userRole = localStorage.getItem('userRole');
    return (
        <>
        <LogoWall />        
            <div className='container-btns'>
                {userRole === 'admin' && <AdminBtn />}
                {(userRole === 'waiter' || userRole === 'admin') && <StatusBtn setShowStatus = {props.setShowStatus}/>}
                {(userRole === 'waiter' || userRole === 'admin') && <OrderBtn setShowOrder={props.setShowOrder} countProducts={props.countProducts}  clientName = {props.clientName} setClientNameError = {props.setClientNameError}/>}
                <Logout />
            </div>
        </>
    );
};

export default NavBar;


