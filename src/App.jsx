import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/Signup';
ProfilePage
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component
import ProfilePage from './pages/Profile';
import Room from './pages/Room';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/feed" />} />
        <Route path='/feed' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
        />

        <Route path='/profile' element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
        />

        <Route path='/room' element={
          <ProtectedRoute>
            <Room />
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
