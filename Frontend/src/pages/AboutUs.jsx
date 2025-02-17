import student2 from "../assets/students-4.jpg";
import student3 from "../assets/stu.jpg";
import vision from "../assets/loc.jpg";

import {
  Award,
  Eye,
  Lightbulb,
  ShieldCheck,
  Target,
  UserRound,
  Users,
} from "lucide-react";

import experiencedEducatorsImage from "../assets/loc.jpg"; // Adjust path
import innovativeCurriculumImage from "../assets/icon02.png"; // Adjust path
import safeEnvironmentImage from "../assets/loc.jpg"; // Adjust path
import extracurricularImage from "../assets/icon02.png"; // Adjust path
import communityEngagementImage from "../assets/icon03.png"; // Adjust path

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Us
          </h1>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl mb-4">
              Our Commitment to Excellence
            </h2>
            {/* Subheading */}
            <p className="mt-6 text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Welcome to
              <span className="text-indigo-600 font-semibold transition-colors duration-300 hover:text-indigo-800">
                MySchool
              </span>
              , where education meets innovation! We strive to create a
              nurturing and inspiring learning environment for all students.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12">
          <img
            src={student2} // Replace with your hero image
            alt="MySchool Campus"
            className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            {/* Center content */}
            <div className="rounded-full bg-blue-100 p-3 mb-4">
              {/* Icon container */}
              <Eye className="w-12 h-12 text-blue-500" /> {/* Styled icon */}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Our Vision
            </h2>
            <p className="text-gray-600 text-center">
              {/* Center text */}
              To be a leading educational institution that fosters academic
              excellence, creativity, and character development, preparing
              students to thrive in an ever-changing world.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            {/* Center content */}
            <div className="rounded-full bg-green-100 p-3 mb-4">
              {/* Icon container */}
              <Target className="w-12 h-12 text-green-500" />
              {/* Styled icon */}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-600 text-center">
              {/* Center text */}
              At MySchool, we strive to deliver a high-quality, holistic
              education that integrates academic rigor with extracurricular
              opportunities, cultivating a culture of respect, inclusivity, and
              collaboration.
            </p>
          </div>
        </div>

        {/* Why Choose MySchool Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Why Choose MySchool?
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Experienced Educators",
                description:
                  "Our dedicated team of teachers and staff are passionate about education and are committed to helping every student succeed.",
                image: experiencedEducatorsImage, // Replace with your image
              },
              {
                title: "Innovative Curriculum",
                description:
                  "We offer a forward-thinking curriculum that combines traditional learning with modern technology and hands-on experiences.",
                image: innovativeCurriculumImage, // Replace with your image
              },
              {
                title: "Safe and Supportive Environment",
                description:
                  "MySchool is a place where every student feels valued, supported, and encouraged to grow.",
                image: safeEnvironmentImage, // Replace with your image
              },
              {
                title: "Extracurricular Excellence",
                description:
                  "From sports to arts, robotics to debate, we provide a wide range of activities to help students explore their passions and talents.",
                image: extracurricularImage, // Replace with your image
              },
              {
                title: "Community Engagement",
                description:
                  "We believe in the power of community and actively involve parents, alumni, and local partners in our educational journey.",
                image: communityEngagementImage, // Replace with your image
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Our Values
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                name: "Excellence",
                color: "text-indigo-600",
                icon: Award, // Example: Using the Award icon
              },
              {
                name: "Integrity",
                color: "text-green-600",
                icon: ShieldCheck, // Example: Using the ShieldCheck icon
              },
              {
                name: "Innovation",
                color: "text-yellow-600",
                icon: Lightbulb, // Example: Using the Lightbulb icon
              },
              {
                name: "Collaboration",
                color: "text-red-600",
                icon: Users, // Example: Using the Users icon
              },
              {
                name: "Diversity",
                color: "text-purple-600",
                icon: UserRound, // Example: Using the UserRound icon (or a group icon if preferred)
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                {/* Render the Lucide icon */}
                <value.icon className={`w-24 h-24 mx-auto ${value.color}`} />
                <span className={`mt-4 text-2xl font-bold ${value.color}`}>
                  {value.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Join the MySchool Family
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Whether you're a parent, student, or community member, we invite you
            to be part of the MySchool family. Together, we can shape a brighter
            future for our students and the world.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
