import Background from '../components/Background.jsx';
import NavBar from '../components/wall/NavBar.jsx';
import ClientName from '../components/wall/ClientName.jsx';


const Wall = () => {
    const userRole = localStorage.getItem('userRole');
    return (
        <>
            <Background />
            <NavBar />
            {(userRole === 'waiter' || userRole === 'admin') && <ClientName />}
               
        </>
    );
};

export default Wall;
