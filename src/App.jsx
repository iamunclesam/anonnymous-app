
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './pages/home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path='/dashboard' element={<Home />} />
      </Routes>
    </>
  )
}
export default App
