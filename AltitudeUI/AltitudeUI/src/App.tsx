import { BrowserRouter, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppWrapper from './components/AppWrapper';
import AppRoutes from './routes/AppRoutes';
import NavBar from './NavBar/NavBar';
import { BackgroundShapes } from './components/UI';

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <AppWrapper header={!isLoginPage ? <NavBar /> : undefined}>
      <BackgroundShapes />
      <AppRoutes />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#FFFFFF',
            color: '#2D3748',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Dubai, sans-serif',
            fontSize: '14px',
            fontWeight: '500',
            padding: '16px',
            maxWidth: '400px',
          },
          success: {
            style: {
              border: '1px solid #10B981',
            },
            iconTheme: {
              primary: '#10B981',
              secondary: '#FFFFFF',
            },
          },
          error: {
            style: {
              border: '1px solid #EF4444',
            },
            iconTheme: {
              primary: '#EF4444',
              secondary: '#FFFFFF',
            },
          },
          loading: {
            style: {
              border: '1px solid #B210FF',
            },
            iconTheme: {
              primary: '#B210FF',
              secondary: '#FFFFFF',
            },
          },
        }}
      />
    </AppWrapper>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
