import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = () => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="full-page-loader">Loading...</div>;
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // If someone hits /dashboard, push them to role dashboard
  if (location.pathname === '/dashboard') {
    return <Navigate to={`/${currentUser.role}/dashboard`} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
