import Login from './pages/Login';
import Wall from './pages/Wall';
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
    } else{
      navigate('/wall');
    }
  }, [navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/wall" element={<Wall />} />
      </Routes>
    </div>
  );
}

export default App
