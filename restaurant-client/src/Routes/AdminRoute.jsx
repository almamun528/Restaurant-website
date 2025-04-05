import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin(); // make sure this order is correct!
  const location = useLocation();

  // Show loading spinner while data is loading
  if (loading || isAdminLoading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  // If user exists and is an admin, allow access
  if (user && isAdmin) {
    return children;
  }

  // Redirect if not admin or not logged in
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
