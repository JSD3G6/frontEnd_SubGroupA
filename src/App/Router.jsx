import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoardPage from '../pages/DashBoard';
import LandingPage from '../pages/LandingPage';
import RegisterPage from '../pages/RegisterPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
