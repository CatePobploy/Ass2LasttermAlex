import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Signup from './pages/auth/Signup';  // Import Signup page
import Login from './pages/auth/Login';
import PrivateRoutes from './components/layout/PrivateRoute';
import Dashboard from './pages/auth/Dashboard';
import NotFound from './pages/NotFound';  // Import NotFound component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />  {/* Signup route */}
        <Route path="login" element={<Login />} />  {/* Login route */}
        <Route path="cart" element={<div>Cart Page</div>} />  {/* Placeholder for Cart page */}

        {/* PRIVATE AUTH ROUTES */}
        <Route element={<PrivateRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />  {/* NotFound route */}
      </Route>
    </Routes>
  );
}

export default App;
