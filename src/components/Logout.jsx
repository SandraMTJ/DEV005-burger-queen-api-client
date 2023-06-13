import { useNavigate } from 'react-router-dom';
import { RiLogoutBoxRLine } from 'react-icons/ri';

const Logout = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        navigate('/');
    };

    return (
        <div className='btn-logout-container'>
            <button className="btn-logout" onClick={logout}>
                <RiLogoutBoxRLine className="password-icon" />
                Logout
            </button>
        </div>
    );
};

export default Logout;
