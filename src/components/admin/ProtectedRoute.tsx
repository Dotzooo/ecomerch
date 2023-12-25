import { Navigate, Outlet } from "react-router-dom";
import { ProtectedRouteProps } from "../../interface/admin";

export default function ProtectedRoute({ isLoggedIn }: ProtectedRouteProps) {
  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}
