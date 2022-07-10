import './App.css';
import {Navigate, Routes, Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Pages/Home';
import Layout from './components/Layout';
import UserProfile from './components/Pages/UserProfile';
import Job from './components/Pages/Job';
import EditUser from './components/Pages/EditUser';

function App() {
  return (
    <div>
      <Toaster />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/:id' element={<UserProfile />} />
          <Route path='/user/edit' element={<EditUser />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/jobs/:id' element={<Job />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
