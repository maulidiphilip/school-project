import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, Clock, Users, Download } from "lucide-react";

const AcademicsPage = () => {
  const handleDownload = () => {
    const pdfUrl = "/assets/curriculum.pdf";
    window.open(pdfUrl, "_blank", "noopener,noreferrer") ||
      Object.assign(document.createElement("a"), {
        href: pdfUrl,
        download: "MySchool_Curriculum.pdf",
      }).click();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-labelledby="academics-header"
      className="bg-gray-50 pt-24 sm:pt-28 pb-12 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mt-6 sm:mt-8 mb-12">
          <h1
            id="academics-header"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Academics
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            At MySchool, we offer a comprehensive and innovative academic
            curriculum designed to inspire and prepare students for success in a
            rapidly changing world.
          </p>
        </div>

        {/* Academic Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              title: "STEM Programs",
              icon: BookOpen,
              description: "Explore our Science, Technology, Engineering, and Mathematics programs designed to foster innovation and critical thinking.",
            },
            {
              title: "Arts & Humanities",
              icon: GraduationCap,
              description: "Discover creative programs that nurture self-expression and cultural understanding.",
            },
            {
              title: "Sports & Athletics",
              icon: Clock,
              description: "Join our sports programs to build teamwork, discipline, and physical fitness.",
            },
            {
              title: "Extracurriculars",
              icon: Users,
              description: "Engage in clubs, activities, and leadership opportunities beyond the classroom.",
            },
          ].map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <program.icon className="h-10 w-10 sm:h-12 sm:w-12 text-gray-900" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                {program.title}
              </h3>
              <p className="text-gray-700">{program.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Curriculum Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-20"
        >
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Our Curriculum
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Our curriculum is designed to provide a well-rounded education,
              combining academic rigor with real-world applications. Download
              the full curriculum to learn more about our programs and courses.
            </p>
            <button
              onClick={handleDownload}
              aria-label="Download MySchool Curriculum PDF"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Curriculum (PDF)
            </button>
          </div>
        </motion.div>

        {/* Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-900 rounded-lg p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            Discover how MySchool can help you achieve your academic and
            personal goals. Enroll today!
          </p>
          <Link
            to="/admissions"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 transition-colors duration-300"
          >
            Enroll Now
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AcademicsPage;