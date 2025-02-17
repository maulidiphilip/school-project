import personIcon from "../assets/patient-avatar.png";
import backgroundImage from "../assets/hero-bg.png";
import { Book, Users, Building, History, Target } from "lucide-react";
import student1 from "../assets/students-2.jpg";
import student2 from "../assets/students-6.jpg";
import student3 from "../assets/students-5.jpg";
import events from "../data/events";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Empowering Future Leaders Through Excellence in Education
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            At MySchool, we provide a nurturing environment where students can
            thrive academically, socially, and creatively. Join us to unlock
            your child’s full potential.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center space-x-4">
            <a
              href="/admissions"
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 relative overflow-hidden">
        {/* Optional: Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose MySchool?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Book className="w-12 h-12 text-gray-900 mx-auto mb-4" />{" "}
              {/* Icon */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Academic Excellence
              </h3>
              <p className="text-gray-700">
                Our curriculum is designed to challenge and inspire students to
                achieve their best.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Users className="w-12 h-12 text-gray-900 mx-auto mb-4" />{" "}
              {/* Icon */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Holistic Development
              </h3>
              <p className="text-gray-700">
                We focus on nurturing creativity, leadership, and social skills
                alongside academics.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Building className="w-12 h-12 text-gray-900 mx-auto mb-4" />{" "}
              {/* Icon */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                State-of-the-Art Facilities
              </h3>
              <p className="text-gray-700">
                Our campus is equipped with modern facilities to support
                learning and extracurricular activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            What Parents and Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <img
                src={personIcon}
                alt="Jane Doe"
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-4">
                "My child has grown so much since joining MySchool. The teachers
                are dedicated, and the environment is truly nurturing."
              </p>
              <p className="text-gray-900 font-semibold">— Jane Doe, Parent</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <img
                src={personIcon}
                alt="John Smith"
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-4">
                "I love the opportunities I get here to explore my interests and
                grow as a leader. MySchool is amazing!"
              </p>
              <p className="text-gray-900 font-semibold">
                — John Smith, Student
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Campus Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add images here */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img src={student1} alt="Campus Image 1" className="rounded-lg" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img src={student2} alt="Campus Image 2" className="rounded-lg" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img src={student3} alt="Campus Image 3" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Mission and History */}
            <div>
              {/* Our Mission */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-gray-900 mr-3" />{" "}
                  {/* Icon for Mission */}
                  <h3 className="text-xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-700">
                  At MySchool, our mission is to provide a transformative
                  educational experience that empowers students to become
                  lifelong learners and responsible global citizens.
                </p>
              </div>

              {/* Our History */}
              <div>
                <div className="flex items-center mb-4">
                  <History className="h-8 w-8 text-gray-900 mr-3" />{" "}
                  {/* Icon for History */}
                  <h3 className="text-xl font-bold text-gray-900">
                    Our History
                  </h3>
                </div>
                <p className="text-gray-700">
                  Founded in 1995, MySchool has been a cornerstone of academic
                  excellence and community engagement for over two decades.
                </p>
              </div>

              {/* Button to About Us Page */}
              <div className="mt-8">
                <Link
                  to="/about" // Replace with your About Us page route
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Column: Image */}
            <div>
              <img
                src={student1} // Replace with an appropriate image
                alt="About Us"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* STEM Education */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-900"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <path d="M5 3v4" />
                  <path d="M19 17v4" />
                  <path d="M3 5h4" />
                  <path d="M17 19h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                STEM Education
              </h3>
              <p className="text-gray-700">
                Our STEM programs encourage innovation and critical thinking,
                preparing students for the future.
              </p>
            </div>

            {/* Arts & Creativity */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-900"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <path d="m7.5 4.27 9 5.15" />
                  <path d="M3.29 7 12 12l8.71-5" />
                  <path d="M12 22V12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Arts & Creativity
              </h3>
              <p className="text-gray-700">
                We offer a wide range of arts programs to nurture creativity and
                self-expression.
              </p>
            </div>

            {/* Sports & Athletics */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-900"
                >
                  <path d="M22 11v1a10 10 0 1 1-9-10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <path d="M9 9h.01" />
                  <path d="M15 9h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Sports & Athletics
              </h3>
              <p className="text-gray-700">
                Our sports programs promote teamwork, discipline, and physical
                fitness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
              >
                {/* Event Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{event.date}</p>
                  <p className="text-gray-700 mb-6">{event.description}</p>
                  <a
                    href="#"
                    className="inline-block px-6 py-3 rounded-lg text-white bg-gray-900 hover:bg-gray-700 transition duration-300 font-semibold"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Take the first step toward a brighter future for your child.
          </p>
          <a
            href="/admissions"
            className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
