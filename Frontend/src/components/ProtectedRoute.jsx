import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAdmin = typeof window !== 'undefined' && localStorage.getItem('isAdmin') === 'true';
  const adminKey = typeof window !== 'undefined' && localStorage.getItem('adminKey');

  if (isAdmin && adminKey) {
    return children;
  }

  return <Navigate to="/admin-login" replace />;
} 