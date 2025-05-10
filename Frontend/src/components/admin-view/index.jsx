import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, Menu, X } from "lucide-react";
import toast from "react-hot-toast";
import { logout } from "../../store/auth-slice";
import { sections } from "./Sections/sections";
import UserManagement from "./Sections/UserManagement";
import EventsCalendar from "./Sections/EventsCalendar";
import Announcements from "./Sections/Announcements";
import ContentManagement from "./Sections/ContentManagement";
import Analytics from "./Sections/Analytics";
import Settings from "./Sections/Settings";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [activeSection, setActiveSection] = useState("users");
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const handleLogout = async () => {
    await dispatch(logout());
    toast.success("Logged out!");
    navigate("/login");
  };

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (desktop) setShowSidebar(true);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!user) return null;

  const renderSection = () => {
    switch (activeSection) {
      case "users":
        return <UserManagement />;
      case "events":
        return <EventsCalendar />;
      case "announcements":
        return <Announcements />;
      case "content":
        return <ContentManagement />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return <Settings />;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 pt-24 sm:pt-28 pb-12 overflow-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-800">
              Admin Panel: {user.userName}
            </h2>
            <button
              className="sm:hidden ml-4 text-indigo-600"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              {showSidebar ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-white text-indigo-700 hover:bg-indigo-100 transition border border-indigo-300 rounded-xl shadow-sm"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <AnimatePresence>
            {showSidebar && (
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full md:w-72 bg-white rounded-2xl shadow-lg p-6 md:block"
              >
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        setActiveSection(section.id);
                        if (!isDesktop) setShowSidebar(false);
                      }}
                      className={`w-full flex items-center px-4 py-2 text-left rounded-xl transition font-medium ${
                        activeSection === section.id
                          ? "bg-indigo-600 text-white shadow"
                          : "text-gray-700 hover:bg-indigo-50"
                      }`}
                    >
                      <section.icon className="h-5 w-5 mr-3" />
                      {section.label}
                    </button>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 overflow-x-auto">
            {renderSection()}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AdminDashboard;