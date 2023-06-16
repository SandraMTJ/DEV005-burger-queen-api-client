import Background from '../components/Background.jsx';
import NavBar from '../components/wall/NavBar.jsx';
import MenuPage from '../components/MenuPage.jsx';

const Wall = () => {
    const userRole = localStorage.getItem('userRole');

    return (
        <>
            <Background />
            <NavBar />
            {(userRole === 'waiter' || userRole === 'admin') && <MenuPage/>}       
            

        </>
    );
};

export default Wall;
