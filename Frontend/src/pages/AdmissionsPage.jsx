import {
  ClipboardList,
  Calendar,
  DollarSign,
  Mail,
  Phone,
  Download,
} from "lucide-react"; // Lucide icons
import { Link } from "react-router-dom"; // For React Router
// OR
// import Link from 'next/link'; // For Next.js

const AdmissionsPage = () => {
  // Function to handle PDF download
  const handleDownloadForm = () => {
    const pdfUrl = "/path/to/admission-form.pdf"; // Replace with the actual path to your PDF file
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "MySchool_Admission_Form.pdf"; // Name of the downloaded file
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
            Admissions
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Join MySchool and become part of a community dedicated to academic
            excellence, innovation, and personal growth. Start your journey with
            us today!
          </p>
        </div>

        {/* Admission Process Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Application */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <ClipboardList className="h-12 w-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Step 1: Application
              </h3>
              <p className="text-gray-700 mb-6">
                Submit a completed application form along with the required
                documents.
              </p>
              {/* Download Button */}
              <button
                onClick={handleDownloadForm}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 mb-4"
              >
                <Download className="h-5 w-5 mr-2" /> {/* Download Icon */}
                Download Form
              </button>
              {/* Submission Instructions */}
              <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-lg shadow-md">
                {/* Mail Icon */}
                <Mail className="text-indigo-600 w-5 h-5" />

                {/* Text Content */}
                <p className="text-base text-gray-700">
                  Submit the completed form to:{" "}
                  <a
                    href="mailto:admissions@myschool.mw"
                    className="text-indigo-600 font-semibold hover:underline transition duration-200"
                  >
                    admissions@myschool.mw
                  </a>
                </p>
              </div>
            </div>

            {/* Step 2: Assessment */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Calendar className="h-12 w-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Step 2: Assessment
              </h3>
              <p className="text-gray-700">
                Attend an assessment or interview to evaluate your readiness for
                our programs.
              </p>
            </div>

            {/* Step 3: Admission Decision */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Mail className="h-12 w-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Step 3: Decision
              </h3>
              <p className="text-gray-700">
                Receive an admission decision within 2 weeks of your assessment.
              </p>
            </div>

            {/* Step 4: Enrollment */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <DollarSign className="h-12 w-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Step 4: Enrollment
              </h3>
              <p className="text-gray-700">
                Complete the enrollment process and pay the school fees to
                secure your spot.
              </p>
            </div>
          </div>
        </div>

        {/* School Fees Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            School Fees
          </h2>
          <div className="text-center">
            <p className="text-xl text-gray-700 mb-6">
              The annual school fees at MySchool are:
            </p>
            <p className="text-4xl font-bold text-indigo-600 mb-8">
              MWK300,000.00
            </p>
            <p className="text-gray-700">
              Fees cover tuition, learning materials, and access to school
              facilities. Payment plans are available upon request.
            </p>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Mail className="h-12 w-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
              <p className="text-gray-700">admissions@myschool.mw</p>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Phone className="h-12 w-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phone</h3>
              <p className="text-gray-700">+265 123 456 789</p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-gray-900 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Apply?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Start your application today and take the first step toward a
            brighter future at MySchool.
          </p>
          <Link
            to="/apply" // Replace with your application page route
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-white hover:bg-indigo-50 transition-colors duration-300"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsPage;
