import Login from './pages/Login';
import Waiter from './pages/Waiter';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/'); 
    }
  }, [navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/waiter" element={<Waiter />} />
      </Routes>
    </div>
  );
}

export default App
