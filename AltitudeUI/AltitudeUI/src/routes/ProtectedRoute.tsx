import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  role?: 'Admin' | 'Customer';
}

const ProtectedRoute = ({ children, role }: Props) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  if (!token) return <Navigate to="/login" />;
  if (role && userRole !== role) return <Navigate to="/login" replace />;

  return <>{children}</>;
};

export default ProtectedRoute;
