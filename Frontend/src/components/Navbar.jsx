import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import logo from "../assets/favicon.svg";
import { Menu, X, User, LogIn, Home, Info, BookOpen, UserCheck, Phone } from "lucide-react";

const menuItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/academics", label: "Academics", icon: BookOpen },
  { to: "/admissions", label: "Admissions", icon: UserCheck },
  { to: "/contact", label: "Contact", icon: Phone },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const goToDashboard = () => {
    if (!user?.role) return;
    if (user.role === "admin") navigate("/admin/dashboard");
    else navigate("/dashboard");
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-200"
    >
      <div className="flex h-16 items-center justify-between px-6">
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="School Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-gray-900">MySchool</span>
        </NavLink>

        <div className="hidden md:flex flex-1 justify-center space-x-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2 text-gray-700 ${isActive ? "text-indigo-700" : "hover:text-indigo-700"} transition`
              }
            >
              <item.icon size={18} /> {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated && user ? (
            <button
              onClick={goToDashboard}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200"
            >
              <User size={20} /> <span className="font-medium">{user.userName}</span>
            </button>
          ) : (
            <NavLink
              to="/login"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              <LogIn size={18} /> Login
            </NavLink>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-white flex flex-col border-t border-gray-200 overflow-hidden`}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="py-2 px-4 flex items-center gap-2 text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            <item.icon size={18} /> {item.label}
          </NavLink>
        ))}
        {isAuthenticated && user ? (
          <button
            onClick={goToDashboard}
            className="py-2 px-4 flex items-center gap-2 text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            <User size={18} /> {user.userName}
          </button>
        ) : (
          <NavLink
            to="/login"
            className="py-2 px-4 flex items-center gap-2 text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            <LogIn size={18} /> Login
          </NavLink>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
