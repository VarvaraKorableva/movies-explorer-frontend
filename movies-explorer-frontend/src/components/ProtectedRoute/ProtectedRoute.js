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

export default ProtectedRoute;

/*
import {
  Navigate,
  Outlet,
} from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, redirectPath = '/' }) => {
  if (!loggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};*/

