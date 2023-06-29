import Login from './pages/Login';
import Wall from './pages/Wall';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Admin from './pages/Admin'
import { useState } from 'react';


function App() {
  const navigate = useNavigate();
  const [showAdminView, setShowAdminView] = useState(false); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole');
    const currentPath = window.location.pathname;

    if (!token) {
      navigate('/');
    } else if (currentPath === '/admin') {
      // Verificar si el usuario tiene permisos de administrador
      const isAdmin = (userRole === 'admin')// Tu lógica para verificar si el usuario es administrador

      if (isAdmin) {
        navigate('/admin');
        return;
      } else {
        // Redirige a otra ruta si el usuario no es administrador
        navigate('/wall');
      }
    } else {
      navigate('/wall');
    }
  }, [navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/wall" element={<Wall showAdminView = {showAdminView}  setShowAdminView = {setShowAdminView}/>} />
        <Route path="/admin" element={<Admin setShowAdminView = {setShowAdminView}/>} />
      </Routes>
    </div>
  );
}

export default App
