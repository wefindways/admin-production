import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute() {
  const { authorized, loading } = useAuth();

  if (loading) return null; 

  if (!authorized) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
