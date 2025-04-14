import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Award,
  Eye,
  Lightbulb,
  ShieldCheck,
  Target,
  UserRound,
  Users,
} from "lucide-react";

import heroImage from "../assets/students-4.jpg";
import experiencedEducatorsImage from "../assets/loc.jpg";
import innovativeCurriculumImage from "../assets/icon02.png";
import safeEnvironmentImage from "../assets/loc.jpg";
import extracurricularImage from "../assets/icon02.png";
import communityEngagementImage from "../assets/icon03.png";

const reasons = [
  {
    title: "Experienced Educators",
    description: "Our dedicated team of teachers and staff are passionate about education and are committed to helping every student succeed.",
    image: experiencedEducatorsImage,
    alt: "MySchool teachers guiding students",
  },
  {
    title: "Innovative Curriculum",
    description: "We offer a forward-thinking curriculum that combines traditional learning with modern technology and hands-on experiences.",
    image: innovativeCurriculumImage,
    alt: "Students using technology in class",
  },
  {
    title: "Safe and Supportive Environment",
    description: "MySchool is a place where every student feels valued, supported, and encouraged to grow.",
    image: safeEnvironmentImage,
    alt: "Supportive classroom environment",
  },
  {
    title: "Extracurricular Excellence",
    description: "From sports to arts, robotics to debate, we provide a wide range of activities to help students explore their passions and talents.",
    image: extracurricularImage,
    alt: "Students in sports and arts activities",
  },
  {
    title: "Community Engagement",
    description: "We believe in the power of community and actively involve parents, alumni, and local partners in our educational journey.",
    image: communityEngagementImage,
    alt: "Community event at MySchool",
  },
];

const values = [
  { name: "Excellence", icon: Award },
  { name: "Integrity", icon: ShieldCheck },
  { name: "Innovation", icon: Lightbulb },
  { name: "Collaboration", icon: Users },
  { name: "Diversity", icon: UserRound },
];

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 pt-[72px] sm:pt-[88px] pb-12 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <section aria-labelledby="about-header" className="text-center mt-6 sm:mt-8">
          <h1
            id="about-header"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900"
          >
            About Us
          </h1>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4 mt-4">
              Our Commitment to Excellence
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Welcome to{" "}
              <Link to="/" className="text-gray-900 font-semibold hover:text-gray-700">
                MySchool
              </Link>
              , where education meets innovation! We strive to create a nurturing
              and inspiring learning environment for all students.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <img
            src={heroImage}
            alt="MySchool students collaborating on campus"
            className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </motion.div>

        {/* Vision and Mission */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Our Vision",
              icon: Eye,
              description: "To be a leading educational institution that fosters academic excellence, creativity, and character development, preparing students to thrive in an ever-changing world.",
            },
            {
              title: "Our Mission",
              icon: Target,
              description: "At MySchool, we strive to deliver a high-quality, holistic education that integrates academic rigor with extracurricular opportunities, cultivating a culture of respect, inclusivity, and collaboration.",
            },
          ].map((item, index) => (
            <motion.article
              key={item.title}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
              aria-label={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="rounded-full bg-gray-100 p-3 mb-4">
                <item.icon className="w-12 h-12 text-gray-900" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 text-center">{item.description}</p>
            </motion.article>
          ))}
        </section>

        {/* Why Choose MySchool Section */}
        <section aria-labelledby="why-choose-headline" className="mt-12">
          <h2
            id="why-choose-headline"
            className="text-2xl sm:text-3xl font-bold text-center text-gray-900"
          >
            Why Choose MySchool?
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((item, index) => (
              <motion.article
                key={item.title}
                className="bg-white p-6 rounded-lg shadow-md"
                aria-label={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-48 object-cover rounded-md"
                  loading="lazy"
                />
                <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section aria-labelledby="values-headline" className="mt-12">
          <h2
            id="values-headline"
            className="text-2xl sm:text-3xl font-bold text-center text-gray-900"
          >
            Our Values
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.article
                key={value.name}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                aria-label={value.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <value.icon className="w-12 h-12 text-gray-900 mx-auto" />
                <h3 className="mt-4 text-lg sm:text-xl font-bold text-gray-900">
                  {value.name}
                </h3>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <motion.section
          aria-labelledby="cta-headline"
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="cta-headline"
            className="text-2xl sm:text-3xl font-bold text-gray-900"
          >
            Join the MySchool Family
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            Whether you are a parent, student, or community member, we invite you
            to be part of the MySchool family. Together, we can shape a brighter
            future for our students and the world.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
            >
              Contact Us
            </Link>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default AboutUs;