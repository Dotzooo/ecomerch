import { Navigate, Outlet } from "react-router-dom";
import { ProtectedRouteProps } from "../../interface/admin/index";

export default function ProtectedRoute(loginProps: ProtectedRouteProps) {
  if (!loginProps.isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}
