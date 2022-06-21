import './App.css';
import {Navigate, Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
