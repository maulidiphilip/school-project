import { useParams, Link } from "react-router-dom";
import events from "../data/events";

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900">Event Not Found</h2>
        <Link to="/" className="mt-4 text-indigo-600 hover:underline">
          Go Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-900">{event.title}</h1>
        <p className="text-gray-500 text-lg mt-2">{event.date}</p>
        <p className="text-gray-700 mt-6">{event.details}</p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 rounded-lg text-white bg-gray-900 hover:bg-gray-700 transition duration-300 font-semibold"
        >
          ← Go Back
        </Link>
      </div>
    </div>
  );
};

export default EventDetails;
