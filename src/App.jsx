import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/Signup';
ProfilePage
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component
import ProfilePage from './pages/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
        />

        <Route path='/profile' element={
          <ProfilePage />
        }
        />


        <Route path='/profile' element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
        />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
