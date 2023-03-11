import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  // if there is no user in our context then it will restrict the access to our main application
  // user will always be on signin or signup page without authentication
  if (!user) {
    return <Navigate to='/signin' replace/>;
  }
  return children;
};

export default ProtectedRoute;