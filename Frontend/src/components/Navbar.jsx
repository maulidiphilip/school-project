import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/favicon.svg";
import { Menu, X, User, LogIn, UserPlus, Home, Info, BookOpen, UserCheck, Phone } from "lucide-react";

const menuItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/academics", label: "Academics", icon: BookOpen },
  { to: "/admissions", label: "Admissions", icon: UserCheck },
  { to: "/contact", label: "Contact", icon: Phone },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Main navigation"
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-none md:shadow-md backdrop-blur-none md:backdrop-blur-sm border-b border-gray-200 md:border-none"
    >
      <div className="flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2" aria-label="MySchool Home">
          <img src={logo} alt="School Logo" className="h-7 w-7 sm:h-8 sm:w-8" />
          <span className="text-lg sm:text-xl font-bold text-gray-900">MySchool</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2 text-gray-700 ${isActive ? "text-gray-900" : "hover:text-gray-900"} transition-colors duration-300`
              }
            >
              <item.icon size={18} /> {item.label}
            </NavLink>
          ))}
        </div>

        {/* Login / Profile */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <div className="relative group">
              <button
                className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                aria-haspopup="true"
                aria-expanded={false}
              >
                <User size={24} /> Profile
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block">
                <NavLink
                  to="/dashboard"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/settings"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </NavLink>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <LogIn size={18} /> Login
              </NavLink>
              <NavLink
                to="/signup"
                className="flex items-center gap-2 px-4 py-2 border bg-gray-900 text-white rounded-lg hover:bg-gray-800"
              >
                <UserPlus size={18} /> Sign Up
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-white flex flex-col items-center border-t py-4 ${isOpen ? "" : "overflow-hidden"} border-gray-200`}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="py-2 px-4 flex items-center gap-2 text-gray-700 hover:bg-gray-100 w-full text-center transition-colors duration-300"
          >
            <item.icon size={18} /> {item.label}
          </NavLink>
        ))}
        {!isLoggedIn ? (
          <>
            <NavLink
              to="/login"
              className="py-2 px-4 flex items-center gap-2 text-gray-700 hover:bg-gray-100 w-full text-center"
            >
              <LogIn size={18} /> Login
            </NavLink>
            <NavLink
              to="/signup"
              className="py-2 px-4 flex items-center gap-2 bg-gray-900 text-white hover:bg-gray-800 w-full text-center"
            >
              <UserPlus size={18} /> Sign Up
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/dashboard"
              className="py-2 px-4 text-gray-700 hover:bg-gray-100 w-full text-center"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/settings"
              className="py-2 px-4 text-gray-700 hover:bg-gray-100 w-full text-center"
            >
              Settings
            </NavLink>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="py-2 px-4 w-full text-center text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;