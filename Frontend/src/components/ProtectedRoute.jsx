import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!isAuthenticated) {
    console.log("ProtectedRoute: Not authenticated, redirecting to /login");
    return <Navigate to="/login" />;
  }

  const isAdminRoute = location.pathname.startsWith("/admin");
  const isTeacherRoute = location.pathname.startsWith("/teacher");
  const isUserRoute = location.pathname.startsWith("/dashboard");

  // Admin trying to access other dashboard
  if (user?.role === "admin" && !isAdminRoute) {
    console.log("ProtectedRoute: Admin redirected to admin dashboard");
    return <Navigate to="/admin/dashboard" />;
  }

  // Teacher trying to access other dashboard
  if (user?.role === "teacher" && !isTeacherRoute) {
    console.log("ProtectedRoute: Teacher redirected to teacher dashboard");
    return <Navigate to="/teacher/dashboard" />;
  }

  // User (default) trying to access other dashboard
  if (user?.role === "user" && !isUserRoute) {
    console.log("ProtectedRoute: User redirected to user dashboard");
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default ProtectedRoute;
