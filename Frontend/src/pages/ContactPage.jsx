import { MapPin, Mail, Phone, Clock } from "lucide-react"; // Lucide icons

const ContactPage = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have questions about
            admissions, programs, or anything else, our team is ready to help.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Address */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <MapPin className="h-12 w-12 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Our Address
            </h3>
            <p className="text-gray-700">
              123 Education Street
              <br />
              Zomba, Malawi
            </p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <Mail className="h-12 w-12 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
            <p className="text-gray-700">
              <a
                href="mailto:info@myschool.mw"
                className="text-gray-600 hover:underline"
              >
                info@myschool.mw
              </a>
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <Phone className="h-12 w-12 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
            <p className="text-gray-700">
              <a
                href="tel:+265123456789"
                className="text-gray-600 hover:underline"
              >
                +265 991 103 578
              </a>
            </p>
          </div>

          {/* Opening Hours */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <Clock className="h-12 w-12 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Opening Hours
            </h3>
            <p className="text-gray-700">
              Mon - Fri: 7:30 AM - 4:30 PM
              <br />
              Sat: 9:00 AM - 1:00 PM
            </p>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-20">
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
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Send Us a Message
          </h2>
          <form className="max-w-2xl mx-auto">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder="Philip Maulidi"
                  required
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder="philipmaulidi@yahoo.com"
                  required
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
