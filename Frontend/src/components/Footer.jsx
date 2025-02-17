import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/favicon.svg"; // Adjust the path as needed

const Footer = () => {
  return (
    <footer className="bg-background text-gray-900 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* School Info */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={logo} alt="School Logo" className="h-10 w-10" />
            <span className="text-xl font-bold">MySchool</span>
          </Link>
          <p className="text-gray-900 font-semibold text-center md:text-left">
            Inspiring and empowering students through excellence in education.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2 font-semibold">
            <li>
              <Link to="/" className="hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-900">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/academics" className="hover:text-gray-900">
                Academics
              </Link>
            </li>
            <li>
              <Link to="/admissions" className="hover:text-gray-900">
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-900">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Us</h3>
          <ul className="space-y-2 font-semibold">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={18} /> 123 School Street, City, Country
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={18} /> +265 991 103 578
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={18} /> philipmaulidi@yahoo.com
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="border-t border-gray-900 mt-8 pt-6 text-center font-semibold flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-gray-900">
          &copy; {new Date().getFullYear()} MySchool. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-900">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-gray-900">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-gray-900">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
