import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn');

  if (!isAdminLoggedIn) {
    alert('Unauthorized access! Please login as Admin.');
    return <Navigate to="/admin-login" />;
  }

  return children;
};

export default ProtectedRoute;
