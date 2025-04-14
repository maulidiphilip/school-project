import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import events from "../data/events";

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        role="alert"
        aria-labelledby="not-found-header"
        className="flex flex-col items-center justify-center min-h-screen bg-gray-50"
      >
        <h2 id="not-found-header" className="text-3xl font-bold text-gray-900">
          Event Not Found
        </h2>
        <Link to="/" className="mt-4 text-gray-900 hover:underline">
          Go Back to Events
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-labelledby="event-header"
      className="min-h-screen bg-gray-50 pt-24 sm:pt-28 pb-12 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 sm:mt-8"
        >
          <img
            src={event.image}
            alt={event.title}
            aria-describedby="event-description"
            className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg mb-6"
          />
          <h1
            id="event-header"
            className="text-3xl sm:text-4xl font-bold text-gray-900"
          >
            {event.title}
          </h1>
          <p className="text-gray-500 text-base sm:text-lg mt-2">{event.date}</p>
          <p id="event-description" className="text-gray-700 mt-6">
            {event.details}
          </p>
          <Link
            to="/"
            className="inline-block mt-6 px-6 py-3 rounded-lg text-white bg-gray-900 hover:bg-gray-700 transition duration-300 font-semibold"
          >
            ← Go Back
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EventDetails;