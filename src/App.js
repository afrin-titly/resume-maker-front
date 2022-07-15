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
import NewJobPost from './components/Pages/NewJobPost';
import EditJobPost from './components/Pages/EditJobPost';
import RecruiterOpenings from './components/Pages/RecruiterOpenings';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div>
      <AuthProvider>
        <Toaster />
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user/:id' element={<UserProfile />} />
            <Route path='/user/edit' element={<EditUser />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/jobs/:id' element={<Job />} />
            <Route path='/jobs/:id/edit' element={<EditJobPost />} />
            <Route path='/jobs/new' element={<NewJobPost />} />
            <Route path='/jobs' element={<RecruiterOpenings />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </div>
  );
}

export default App;
