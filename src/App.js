import './App.css'
import LoginPage from './pages/LoginPage/LoginPage'
import MagazinePage from './pages/MagazinePage/MagazinePage'
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<MagazinePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
     </Routes>
    </div>
  );
}

export default App;
