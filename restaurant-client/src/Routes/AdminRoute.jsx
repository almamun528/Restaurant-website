import React from "react";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const [isAdminLoading, isAdmin] = useAdmin();
  const [user, loading] = useAuth();

  if (loading || isAdminLoading)
    return <span className="loading loading-spinner loading-xl"></span>;
  if (user || isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
