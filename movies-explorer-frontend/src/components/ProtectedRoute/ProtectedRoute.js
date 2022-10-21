import React from "react";
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({
  loggedIn,
  anonymous,
  redirectPath = '/',
  redirectUserPath = '/movies',
  children,
}) => {

  if (!loggedIn && anonymous) {
    return <Navigate to={redirectPath} replace />;
  }

  if (loggedIn && !anonymous) {
    return <Navigate to={redirectUserPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
