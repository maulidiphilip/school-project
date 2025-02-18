import { BookOpen, GraduationCap, Clock, Users, Download } from "lucide-react";
import { Link } from "react-router-dom";

const AcademicsPage = () => {
  // Function to handle PDF download
  const handleDownload = () => {
    const pdfUrl = "/assets/curriculum.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "MySchool_Curriculum.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Academics
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            At MySchool, we offer a comprehensive and innovative academic
            curriculum designed to inspire and prepare students for success in a
            rapidly changing world.
          </p>
        </div>

        {/* Academic Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Program 1: STEM */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <BookOpen className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              STEM Programs
            </h3>
            <p className="text-gray-700">
              Explore our Science, Technology, Engineering, and Mathematics
              programs designed to foster innovation and critical thinking.
            </p>
          </div>

          {/* Program 2: Arts */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <GraduationCap className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Arts & Humanities
            </h3>
            <p className="text-gray-700">
              Discover creative programs that nurture self-expression and
              cultural understanding.
            </p>
          </div>

          {/* Program 3: Sports */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <Clock className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Sports & Athletics
            </h3>
            <p className="text-gray-700">
              Join our sports programs to build teamwork, discipline, and
              physical fitness.
            </p>
          </div>

          {/* Program 4: Extracurriculars */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <Users className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Extracurriculars
            </h3>
            <p className="text-gray-700">
              Engage in clubs, activities, and leadership opportunities beyond
              the classroom.
            </p>
          </div>
        </div>

        {/* Curriculum Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Curriculum
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Our curriculum is designed to provide a well-rounded education,
              combining academic rigor with real-world applications. Download
              the full curriculum to learn more about our programs and courses.
            </p>
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 transition-colors duration-300"
            >
              <Download className="h-5 w-5 mr-2" /> {/* Download Icon */}
              Download Curriculum (PDF)
            </button>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-gray-900 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Discover how MySchool can help you achieve your academic and
            personal goals. Enroll today!
          </p>
          <Link
            to="/admissions"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-white hover:bg-indigo-50 transition-colors duration-300"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AcademicsPage;
