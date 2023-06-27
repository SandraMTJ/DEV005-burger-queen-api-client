import Logout from '../Logout.jsx';
import OrderBtn from './OrderBtn.jsx';
import StatusBtn from './StatusBtn.jsx';
import AdminBtn from './AdminBtn.jsx';
import LogoWall from './LogoWall.jsx';
import PropTypes from 'prop-types';

const NavBar = ( props ) => {
    const userRole = localStorage.getItem('userRole');
    return (
        <>
        <LogoWall />        
            <div className='container-btns'>
                {userRole === 'admin' && <AdminBtn />}
                {(userRole === 'waiter' || userRole === 'admin') && <StatusBtn setShowStatus = {props.setShowStatus} countOrdersReady = {props.countOrdersReady} setCountOrdersReady = {props.setCountOrdersReady}/>}
                {(userRole === 'waiter' || userRole === 'admin') && <OrderBtn setShowOrder={props.setShowOrder} countProducts={props.countProducts}  clientName = {props.clientName} setClientNameError = {props.setClientNameError}/>}
                <Logout />
            </div>
        </>
    );
};

export default NavBar;


NavBar.propTypes = {
    setShowStatus: PropTypes.func,  
    setShowOrder: PropTypes.func, 
    setClientNameError: PropTypes.func, 
    countProducts: PropTypes.number, 
    clientName: PropTypes.string, 
    countOrdersReady:  PropTypes.number,
    setCountOrdersReady: PropTypes.func,
};

