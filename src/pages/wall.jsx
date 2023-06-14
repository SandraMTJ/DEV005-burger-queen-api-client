import Background from '../components/Background.jsx';
import NavBar from '../components/wall/NavBar.jsx';
import ClientName from '../components/wall/ClientName.jsx';
import Category from '../components/wall/Category.jsx';
import MenuPage from '../components/breakfastproducts.jsx';


const Wall = () => {
    const userRole = localStorage.getItem('userRole');
    return (
        <>
            <Background />
            <NavBar />
            {(userRole === 'waiter' || userRole === 'admin') && <ClientName />}
            {(userRole === 'waiter' || userRole === 'admin') && <Category />}
            <MenuPage/>

               
        </>
    );
};

export default Wall;
