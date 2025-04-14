import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", new FormData(e.target));
    alert("Message sent! (Demo)");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-labelledby="contact-header"
      className="bg-gray-50 pt-24 sm:pt-28 pb-12 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mt-6 sm:mt-8 mb-12">
          <h1
            id="contact-header"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have questions about
            admissions, programs, or anything else, our team is ready to help.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              title: "Our Address",
              icon: MapPin,
              content: (
                <>
                  123 Education Street
                  <br />
                  Zomba, Malawi
                </>
              ),
            },
            {
              title: "Email Us",
              icon: Mail,
              content: (
                <a
                  href="mailto:info@myschool.mw"
                  className="text-gray-900 hover:underline"
                >
                  info@myschool.mw
                </a>
              ),
            },
            {
              title: "Call Us",
              icon: Phone,
              content: (
                <a
                  href="tel:+265991103578"
                  className="text-gray-900 hover:underline"
                >
                  +265 991 103 578
                </a>
              ),
            },
            {
              title: "Opening Hours",
              icon: Clock,
              content: (
                <>
                  Mon - Fri: 7:30 AM - 4:30 PM
                  <br />
                  Sat: 9:00 AM - 1:00 PM
                </>
              ),
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <item.icon className="h-10 w-10 sm:h-12 sm:w-12 text-gray-900" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Google Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden mb-20"
        >
          <iframe
            title="MySchool Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125857.74524461297!2d35.25553016401732!3d-15.392880866777368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d904a4e69c5955%3A0x3f17a7caed60f7de!2sZomba%2C%20Malawi!5e0!3m2!1sen!2smw!4v1708500000000!5m2!1sen!2smw"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12"
        >
          <h2
            id="contact-form-header"
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Send Us a Message
          </h2>
          <form aria-labelledby="contact-form-header" onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Philip Maulidi"
                  required
                  aria-required="true"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="philipmaulidi@yahoo.com"
                  required
                  aria-required="true"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="How can we help you?"
                required
                aria-required="true"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactPage;