import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    console.log("AdminRoute: Not authenticated, redirecting to /login");
    return <Navigate to="/login" />;
  }

  if (user?.role !== "admin") {
    console.log("AdminRoute: Non-admin attempted admin route, redirecting to /dashboard");
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default AdminRoute;