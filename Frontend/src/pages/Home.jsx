import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAnnouncements,
  resetAnnouncementError,
} from "../store/admin-slice/announcementSlice";
import toast from "react-hot-toast";
import personIcon from "../assets/patient-avatar.png";
import backgroundImage from "../assets/hero-bg.png";
import {
  Book,
  Users,
  Building,
  History,
  Target,
  Trophy,
  Paintbrush,
  Brain,
} from "lucide-react";
import student1 from "../assets/students-2.jpg";
import student2 from "../assets/students-6.jpg";
import student3 from "../assets/students-5.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Parent",
    quote:
      "My child has grown so much since joining MySchool. The teachers are dedicated, and the environment is truly nurturing.",
    image: personIcon,
  },
  {
    name: "John Smith",
    role: "Student",
    quote:
      "I love the opportunities I get here to explore my interests and grow as a leader. MySchool is amazing!",
    image: personIcon,
  },
];

const galleryImages = [
  { src: student1, alt: "Students collaborating in a classroom" },
  { src: student2, alt: "School library with students reading" },
  { src: student3, alt: "Sports field during a school event" },
];

const aboutContent = [
  {
    title: "Our Mission",
    text: "At MySchool, our mission is to provide a transformative educational experience that empowers students to become lifelong learners and responsible global citizens.",
    icon: Target,
  },
  {
    title: "Our History",
    text: "Founded in 1995, MySchool has been a cornerstone of academic excellence and community engagement for over two decades.",
    icon: History,
  },
];

const programs = [
  {
    title: "STEM Education",
    icon: Brain,
    description:
      "Our STEM programs encourage innovation and critical thinking, preparing students for the future.",
  },
  {
    title: "Arts & Creativity",
    icon: Paintbrush,
    description:
      "We offer a wide range of arts programs to nurture creativity and self-expression.",
  },
  {
    title: "Sports & Athletics",
    icon: Trophy,
    description:
      "Our sports programs promote teamwork, discipline, and physical fitness.",
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const {
    items: announcements,
    isLoading,
    error,
  } = useSelector((state) => state.announcements);

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(resetAnnouncementError());
    }
  }, [error, dispatch]);

  return (
    <main>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        aria-labelledby="hero-headline"
        className="relative bg-cover bg-center pt-24 sm:pt-28 pb-12 px-4 sm:px-6 bg-gray-50"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 sm:mt-8 text-center"
          >
            <h1
              id="hero-headline"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Empowering Future Leaders Through Excellence in Education
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              At MySchool, we provide a nurturing environment where students can
              thrive academically, socially, and creatively. Join us to unlock
              your child’s full potential.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/admissions"
                  aria-label="Apply now for admissions"
                  className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
                >
                  Apply Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/contact"
                  aria-label="Contact us for more information"
                  className="bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition duration-300"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 pt-24 sm:pt-28 pb-12 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose MySchool?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Book,
                title: "Academic Excellence",
                text: "Our curriculum is designed to challenge and inspire students to achieve their best.",
              },
              {
                icon: Users,
                title: "Holistic Development",
                text: "We focus on nurturing creativity, leadership, and social skills alongside academics.",
              },
              {
                icon: Building,
                title: "State-of-the-Art Facilities",
                text: "Our campus is equipped with modern facilities to support learning and extracurricular activities.",
              },
            ].map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
                aria-label={`${feature.title} feature`}
              >
                <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-gray-900 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        aria-labelledby="testimonials-headline"
        className="bg-white pt-24 sm:pt-28 pb-12 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="testimonials-headline"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          >
            What Parents and Students Say
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            role="region"
            aria-label="Testimonials"
          >
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
                aria-label={`Testimonial from ${testimonial.name}`}
              >
                <img
                  src={testimonial.image}
                  alt={`Portrait of ${
                    testimonial.name
                  }, a ${testimonial.role.toLowerCase()}`}
                  aria-describedby={`testimonial-${index}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 object-cover"
                  loading="lazy"
                />
                <p
                  id={`testimonial-${index}`}
                  className="text-gray-700 italic mb-4"
                >
                  {testimonial.quote}
                </p>
                <p className="text-gray-900 font-semibold">
                  — {testimonial.name}, {testimonial.role}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 pt-24 sm:pt-28 pb-12 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Campus Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {galleryImages.map((image, index) => (
              <motion.figure
                key={image.alt}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg"
                  loading="lazy"
                />
              </motion.figure>
            ))}
          </div>
          <div className="text-center mt-8">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/gallery"
                className="text-gray-900 font-semibold hover:underline"
              >
                View More Photos
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        aria-labelledby="about-headline"
        className="bg-white pt-24 sm:pt-28 pb-12 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="about-headline"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          >
            About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              {aboutContent.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
                  className="mb-8"
                  aria-label={item.title}
                >
                  <div className="flex items-center mb-4">
                    <item.icon className="h-8 w-8 text-gray-900 mr-3" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-700">{item.text}</p>
                </motion.article>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="mt-8"
              >
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={student1}
                alt="Students and teachers engaging in a classroom activity"
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        aria-labelledby="programs-headline"
        className="bg-gray-50 pt-24 sm:pt-28 pb-12 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="programs-headline"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          >
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((program, index) => (
              <motion.article
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
                aria-label={program.title}
              >
                <div className="flex justify-center mb-6">
                  <program.icon className="w-10 h-10 sm:w-12 sm:h-12 text-gray-900" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-700">{program.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Upcoming Events Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        aria-labelledby="events-headline"
        className="bg-white pt-24 sm:pt-28 pb-12 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="events-headline"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          >
            Upcoming Events
          </h2>
          {isLoading && (
            <p className="text-center text-gray-600">Loading events...</p>
          )}
          {!isLoading && announcements.length === 0 && (
            <p className="text-center text-gray-600">
              No upcoming events available.
            </p>
          )}
          {!isLoading && announcements.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {announcements.map((event, index) => (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
                  aria-label={event.title}
                >
                  <div className="relative w-full h-40 sm:h-56">
                    <img
                      src={event.image || student1}
                      alt={`Event: ${event.title} on ${event.date}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{event.date}</p>
                    <p className="text-gray-700 mb-6">{event.description}</p>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Link
                        to={`/events/${event.id}`}
                        className="inline-block px-6 py-3 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 font-semibold"
                      >
                        Learn More →
                      </Link>
                    </motion.div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </motion.section>

      {/* Call-to-Action Section */}
      <section aria-labelledby="cta-headline" className="bg-gray-900 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-6 text-center"
        >
          <h2
            id="cta-headline"
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Join Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Take the first step toward a brighter future for your child.
          </p>
          <Link
            to="/admissions"
            className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Apply Now
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
