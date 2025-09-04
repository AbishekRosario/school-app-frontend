import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const RoleRoute = ({ allowedRoles = [] }) => {
  const { currentUser } = useAuth();
  if (!currentUser) return <Navigate to="/login" replace />;
  return allowedRoles.includes(currentUser.role)
    ? <Outlet />
    : <Navigate to="/not-authorized" replace />;
};

export default RoleRoute;
