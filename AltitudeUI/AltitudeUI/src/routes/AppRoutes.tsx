import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import LoginForm from '../components/LoginForm/LoginForm';

// Dodaj svoje dashboard komponente
import AdminDashboard from '../pages/AdminDashboardPage/AdminDashboard';
import CustomerDashboard from '../pages/CustomerDashboardPage/CustomerDashboard';
import ActiveProductPage from '../pages/ActiveProductsPage/ActiveProductPage';
import ActiveUsersPage from '../pages/ActiveUsersPage/ActiveUsersPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import AnalyticsPage from '../pages/AnalyticsPage/AnalyticsPage';


// Placeholder komponente za ostale stranice

const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirect sa root "/" na "/login" */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Javni pristup */}
      <Route path="/login" element={<LoginForm />} />

      {/* Zaštićene rute za Admin */}
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute role="Admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Zaštićene rute za Products */}
      <Route
        path="/active-products"
        element={
          <ActiveProductPage />
        }
      />

      {/* Zaštićene rute za Users */}
      <Route
        path="/active-users"
        element={
          <ProtectedRoute role="Admin">
            <ActiveUsersPage />
          </ProtectedRoute>
        }
      />

      {/* Zaštićene rute za Customer */}
      <Route
        path="/customer-dashboard"
        element={
          <ProtectedRoute role="Customer">
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />

      {/* Profile stranica - dostupna i Admin i Customer korisnicima */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />


      {/* Analytics stranica - samo za Admin */}
      <Route
        path="/analytics"
        element={
          <ProtectedRoute role="Admin">
            <AnalyticsPage />
          </ProtectedRoute>
        }
      />

      {/* Ako ruta nije definisana, redirekt na login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
