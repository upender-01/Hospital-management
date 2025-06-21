import React from "react";
import { FaFacebookF, FaInstagram, FaEnvelope , FaMapMarkerAlt} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 sm text-white py-10 px-5 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Address Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>BHERA Society</p>
          <p>18-397/9/633, Shadnagar,</p>
          <p>Rangareddy, Telangana</p>
          <p>Email: bherasociety2023@gmail.com</p>
          <p>Phone: +91 9701191811</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/aboutus" className="hover:text-white">About Us</a></li>
            <li><a href="/ourservices" className="hover:text-white">Services</a></li>
            <li><a href="/appointment" className="hover:text-white">Appointment</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/contact" className="hover:text-white">Contact Support</a></li>
            <li><a href="/" className="hover:text-white">Donate</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/bhera_society/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61566390302611&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="mailto:bherasociety2023@gmail.com" className="text-gray-300 hover:text-white">
              <FaEnvelope size={20} />
            </a>
            <a href="https://www.google.com/maps/place/Shree+Sathya+Lions+Eye+Hospital/@17.5972683,79.9978209,17z/data=!3m1!4b1!4m6!3m5!1s0x3a348f9b50b565e9:0x20233c7ba14c4ce!8m2!3d17.5972683!4d79.9978209!16s%2Fg%2F11whhfm7rz?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D" className="text-gray-300 hover:text-white">
              <FaMapMarkerAlt size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} BHERA Society. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
