import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSupport = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-8 px-4 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Contact Support
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Reach out to us for any assistance or queries. We are here to help!
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-around gap-6 text-gray-800 dark:text-gray-100">
          <div className="flex items-center gap-3">
            <FaPhone className="text-blue-500" />
            <a href="tel:+919030092707" className="hover:underline">
              +91 9030092707
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-500" />
            <a href="mailto:bhukyaupender31@gmail.com" className="hover:underline">
              bherasociety2023@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>
              Shree Sathya Lions Eye Hospital, Mahabubabad, Telangana
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
