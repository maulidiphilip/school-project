import personIcon from "../assets/patient-avatar.png";
import backgroundImage from "../assets/hero-bg.png";
import { Book, Users, Building } from "lucide-react";
import student1 from "../assets/students-2.jpg";
import student2 from "../assets/students-6.jpg";
import student3 from "../assets/students-5.jpg";

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
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-6">
                At MySchool, our mission is to provide a transformative
                educational experience that empowers students to become lifelong
                learners and responsible global citizens.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our History
              </h3>
              <p className="text-gray-700">
                Founded in 1995, MySchool has been a cornerstone of academic
                excellence and community engagement for over two decades.
              </p>
            </div>
            <div>
              <img
                src={student1} // Replace with an appropriate image
                alt="About Us"
                className="rounded-lg shadow-lg"
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
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                STEM Education
              </h3>
              <p className="text-gray-700">
                Our STEM programs encourage innovation and critical thinking,
                preparing students for the future.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Arts & Creativity
              </h3>
              <p className="text-gray-700">
                We offer a wide range of arts programs to nurture creativity and
                self-expression.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
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
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Annual Science Fair
              </h3>
              <p className="text-gray-700 mb-4">
                Join us on October 15th for our annual science fair showcasing
                student projects.
              </p>
              <a
                href="#"
                className="text-gray-900 font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Parent-Teacher Conferences
              </h3>
              <p className="text-gray-700 mb-4">
                Scheduled for November 1st. Don't miss this opportunity to
                discuss your child's progress.
              </p>
              <a
                href="#"
                className="text-gray-900 font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Sports Day
              </h3>
              <p className="text-gray-700 mb-4">
                Mark your calendars for December 10th! A day full of fun and
                competition.
              </p>
              <a
                href="#"
                className="text-gray-900 font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>
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
