import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ClipboardList,
  Calendar,
  DollarSign,
  Mail,
  Phone,
  Download,
} from "lucide-react";

const AdmissionsPage = () => {
  const handleDownloadForm = () => {
    const pdfUrl = "/assets/admission-form.pdf";
    window.open(pdfUrl, "_blank", "noopener,noreferrer") ||
      Object.assign(document.createElement("a"), {
        href: pdfUrl,
        download: "MySchool_Admission_Form.pdf",
      }).click();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-labelledby="admissions-header"
      className="bg-gray-50 pt-24 sm:pt-28 pb-12 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mt-6 sm:mt-8 mb-12">
          <h1
            id="admissions-header"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Admissions
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Join MySchool and become part of a community dedicated to academic
            excellence, innovation, and personal growth. Start your journey with
            us today!
          </p>
        </div>

        {/* Admission Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Step 1: Application",
                icon: ClipboardList,
                description: "Submit a completed application form along with the required documents.",
                action: (
                  <div>
                    <button
                      onClick={handleDownloadForm}
                      aria-label="Download MySchool Admission Form PDF"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-300 mb-4"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download Form
                    </button>
                    <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg shadow-md">
                      <Mail className="text-gray-900 w-5 h-5" />
                      <p className="text-base text-gray-700">
                        Submit the completed form to:{" "}
                        <a
                          href="mailto:admissions@myschool.mw"
                          className="text-gray-900 font-semibold hover:underline transition duration-200"
                        >
                          admissions@myschool.mw
                        </a>
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                title: "Step 2: Assessment",
                icon: Calendar,
                description: "Attend an assessment or interview to evaluate your readiness for our programs.",
              },
              {
                title: "Step 3: Decision",
                icon: Mail,
                description: "Receive an admission decision within 2 weeks of your assessment.",
              },
              {
                title: "Step 4: Enrollment",
                icon: DollarSign,
                description: "Complete the enrollment process and pay the school fees to secure your spot.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  <step.icon className="h-10 w-10 sm:h-12 sm:w-12 text-gray-900" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-700 mb-6">{step.description}</p>
                {step.action}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* School Fees Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            School Fees
          </h2>
          <div className="text-center">
            <p className="text-lg sm:text-xl text-gray-700 mb-6">
              The annual school fees at MySchool are:
            </p>
            <p className="text-4xl font-bold text-gray-900 mb-8">
              MWK300,000.00
            </p>
            <p className="text-gray-700">
              Fees cover tuition, learning materials, and access to school
              facilities. Payment plans are available upon request.
            </p>
          </div>
        </motion.div>

        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Email",
                icon: Mail,
                value: "admissions@myschool.mw",
              },
              {
                title: "Phone",
                icon: Phone,
                value: "+265 123 456 789",
              },
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  <contact.icon className="h-10 w-10 sm:h-12 sm:w-12 text-gray-900" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  {contact.title}
                </h3>
                <p className="text-gray-700">{contact.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-900 rounded-lg p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Ready to Apply?
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            Start your application today and take the first step toward a
            brighter future at MySchool.
          </p>
          <Link
            to="/admissions"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 transition-colors duration-300"
          >
            Apply Now
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdmissionsPage;