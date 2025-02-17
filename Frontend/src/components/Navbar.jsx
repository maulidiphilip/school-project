import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/favicon.svg";
import {
  Menu,
  X,
  User,
  LogIn,
  UserPlus,
  Home,
  Info,
  BookOpen,
  UserCheck,
  Phone,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo and Name */}
        <Link to="/shop/home" className="flex items-center gap-2">
          <img src={logo} alt="School Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">MySchool</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          <Link to="/" className="flex items-center gap-2 hover:text-gray-600">
            <Home size={18} /> Home
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 hover:text-gray-600"
          >
            <Info size={18} /> About
          </Link>
          <Link
            to="/academics"
            className="flex items-center gap-2 hover:text-gray-600"
          >
            <BookOpen size={18} /> Academics
          </Link>
          <Link
            to="/admissions"
            className="flex items-center gap-2 hover:text-gray-600"
          >
            <UserCheck size={18} /> Admissions
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 hover:text-gray-600"
          >
            <Phone size={18} /> Contact
          </Link>
        </div>

        {/* Login / Profile Section */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <div className="relative group">
              <button className="flex items-center gap-2 focus:outline-none">
                <User size={24} /> Profile
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg hidden group-hover:block">
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-200"
              >
                <LogIn size={18} /> Login
              </Link>
              <Link
                to="/signup"
                className="flex items-center gap-2 px-4 py-2 border bg-gray-900 text-white rounded-lg hover:bg-gray-400"
              >
                <UserPlus size={18} /> Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background flex flex-col items-center border-t py-2">
          <Link
            to="/"
            className="py-2 px-4 flex items-center gap-2 hover:bg-gray-200 w-full text-center"
          >
            <Home size={18} /> Home
          </Link>
          <Link
            to="/about"
            className="py-2 px-4 flex items-center gap-2 hover:bg-gray-200 w-full text-center"
          >
            <Info size={18} /> About
          </Link>
          <Link
            to="/academics"
            className="py-2 px-4 flex items-center gap-2 hover:bg-gray-200 w-full text-center"
          >
            <BookOpen size={18} /> Academics
          </Link>
          <Link
            to="/admissions"
            className="py-2 px-4 flex items-center gap-2 hover:bg-gray-200 w-full text-center"
          >
            <UserCheck size={18} /> Admissions
          </Link>
          <Link
            to="/contact"
            className="py-2 px-4 flex items-center gap-2 hover:bg-gray-200 w-full text-center"
          >
            <Phone size={18} /> Contact
          </Link>
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="py-2 px-4 flex items-center gap-2 hover:bg-gray-200 w-full text-center"
              >
                <LogIn size={18} /> Login
              </Link>
              <Link
                to="/signup"
                className="py-2 px-4 flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 w-full text-center"
              >
                <UserPlus size={18} /> Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="py-2 px-4 hover:bg-gray-200 w-full text-center"
              >
                Dashboard
              </Link>
              <Link
                to="/settings"
                className="py-2 px-4 hover:bg-gray-200 w-full text-center"
              >
                Settings
              </Link>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="py-2 px-4 w-full text-center hover:bg-gray-200"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
