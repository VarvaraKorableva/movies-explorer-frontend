/*import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = (props) => {
  return props.loggedIn ? <Outlet /> : <Navigate to="/" replace />
}

export default ProtectedRoute*/

import React from "react";
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({
  loggedIn,
  redirectPath = '/',
  children,
}) => {

  if (!loggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute
