import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchAnnouncements, resetAnnouncementError } from "../store/admin-slice/announcementSlice";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import student1 from "../assets/students-2.jpg";

const EventDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items: announcements, isLoading, error } = useSelector((state) => state.announcements);

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(resetAnnouncementError());
    }
  }, [error, dispatch]);

  const event = announcements.find((announcement) => announcement.id === id);

  if (isLoading) {
    return (
      <div className="text-center text-gray-600 pt-20">
        <p>Loading...</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="text-center text-gray-600 pt-20">
        <p>Event not found.</p>
        <Link
          to="/"
          className="inline-block mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 pb-12 px-4 sm:px-6 max-w-5xl mx-auto"
    >
      {/* Breadcrumb Navigation */}
      <nav className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link to="/" className="hover:text-indigo-600 transition">
              Home
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link to="/" className="hover:text-indigo-600 transition">
              Events
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-900 truncate max-w-xs">{event.title}</li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-6 sm:p-8 bg-indigo-50">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            {event.title}
          </h1>
          <p className="text-sm text-gray-500 mt-2">{event.date}</p>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src={event.image || student1}
            alt={`Event: ${event.title}`}
            className="w-full h-48 sm:h-64 md:h-96 object-contain bg-gray-100"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <p className="text-gray-700 text-base sm:text-lg mb-4">{event.description}</p>
          <p className="text-gray-700 text-base sm:text-lg">{event.details}</p>
          <p className="text-sm text-gray-500 mt-4">
            Posted on: {new Date(event.createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* Navigation Footer */}
        <div className="p-6 sm:p-8 bg-indigo-50 flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold text-sm sm:text-base"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Events
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default EventDetails;