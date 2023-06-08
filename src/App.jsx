import Login from './pages/login';
import Waiter from './pages/waiter'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Routes, Route } from 'react-router-dom';
function App() {


  return (
    <div>

    <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/waiter" element={<Waiter></Waiter>}></Route> 
    </Routes>

    </div>
  )
}

export default App
