import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import type { PropsWithChildren } from "react";

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const { authorized, loading } = useAuth();

  if (loading) return null; // or spinner

  if (!authorized) {
    return <Navigate to="/" replace />;
  }

  return children;
}
