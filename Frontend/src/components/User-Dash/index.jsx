import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import toast from "react-hot-toast";
import { logout } from "../../store/auth-slice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    console.log("User logging out:", user?.email);
    await dispatch(logout());
    toast.success("Logged out!");
    navigate("/login");
  };

  if (!user) {
    return null; // ProtectedRoute redirects
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 pt-24 sm:pt-28 pb-12 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Welcome, {user.userName}!
          </h2>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">Your Profile</h3>
            <p className="mt-2 text-gray-600">Email: {user.email}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">School Events</h3>
            <p className="mt-2 text-gray-600">View upcoming events.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Dashboard;