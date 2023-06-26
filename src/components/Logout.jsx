import { useNavigate } from 'react-router-dom';
import { RiLogoutBoxRLine } from 'react-icons/ri';

const Logout = () => {
    //localStorage.setItem('token', ''); 
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        navigate('/');
    };

    return (
            <button className="btn-navBar" onClick={logout}>
                <RiLogoutBoxRLine className="navBar-icon" />
                Logout
            </button>
    );
};

export default Logout;
