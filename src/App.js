import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/guest/HomePage';
import CoworkingsPage from './pages/guest/CoworkingsPage';
import DashboardPage from './pages/admin/DashboardPage';
import CoworkingDetailPage from './pages/guest/CoworkingDetailPage';
import LoginPage from './pages/guest/LoginPage';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coworkings" element={<CoworkingsPage />} />
        <Route path='/coworkingdetails/:id' element={<CoworkingDetailPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path='/admin/' element={<DashboardPage />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
