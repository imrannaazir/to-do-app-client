import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Home from './pages/Home.js/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
