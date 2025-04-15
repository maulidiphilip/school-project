import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    console.log("ProtectedRoute: Not authenticated, redirecting to /login");
    return <Navigate to="/login" />;
  }

  if (user?.role === "admin") {
    console.log("ProtectedRoute: Admin attempted user route, redirecting to /admin/dashboard");
    return <Navigate to="/admin/dashboard" />;
  }

  return children;
};

export default ProtectedRoute;