import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// For routes that can only be accessed by authenticated users
function AuthGuard({ children }) {
  const { isAuthenticated } = useAuth();

  const accessToken = localStorage.getItem("accessToken");

  return (
    <Fragment>
      {!accessToken ? children : <Navigate to="/dashboard" />}
    </Fragment>
  );
}

export default AuthGuard;
