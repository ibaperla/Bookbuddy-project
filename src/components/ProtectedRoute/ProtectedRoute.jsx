import React from "react"
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoute() {
    const checkToken = ()=>localStorage.getItem("token");
  return checkToken() ? <Outlet /> : <Navigate to="/login" />;
}

