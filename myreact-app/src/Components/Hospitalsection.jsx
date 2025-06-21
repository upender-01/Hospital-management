import React from "react";
import Hospitalimage from "../assets/hospital.jpg"; // Replace with your actual image import
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Bhavanihospitalimage from "../assets/bhavanieyecare.jpg";

const HospitalSection = () => {
  return (
    <section className="py-10 px-4 md:px-20 bg-gray-50 dark:bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Our Hospitals
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row jusitfy-center gap-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        {/* Hospital Image */}
        <div className="w-full md:w-1/2">
          <img
            src={Hospitalimage}
            alt="Hospital"
            className="w-full h-[20rem] rounded-lg shadow-md"
          />
        </div>

        {/* Hospital Info */}
        <div className="w-full md:w-1/2 space-y-4 ">
        <div>
          <h1 className="font-bold text-[1.5rem]  margin-0 " >Shree Sathya Lions Eye Hospital</h1>
          <h1 className="font-bold text-[1.5rem] italic">Facilities</h1>
           <p>Eyecare services</p>
        </div>
          <div>
             <h1 className="font-bold italic text-[1.5rem]">Address</h1>

            <p className="flex items-center text-gray-700 dark:text-gray-300 italic">
              <FaMapMarkerAlt className="text-red-500 mr-2" />
            H.No. 6‑3‑34/2, Nehru Chowrasta,
            Near MRO Office,
            Mahabubabad, Telangana, India – 506101
            </p>
            <a
              href="https://maps.app.goo.gl/rvwCiG8XmkVrFFKt9?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              View on Google Maps
            </a>
          </div>

          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FaPhoneAlt className="text-green-500 mr-2" />
            Emergency: +91-9030092707
          </div>

          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FaEnvelope className="text-yellow-500 mr-2" />
            Email: <a href="mailto:info@hospital.com" className="ml-1 text-blue-500 hover:underline">bherasociety2023@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row jusitfy-center gap-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        {/* Hospital Image */}
        <div className="w-full md:w-1/2">
          <img
            src={Bhavanihospitalimage}
            alt="Hospital"
            className="w-full h-[20rem] rounded-lg shadow-md"
          />
        </div>

        {/* Hospital Info */}
        <div className="w-full md:w-1/2 space-y-4 ">
        <div>
          <h1 className="font-bold text-[1.5rem]  margin-0 " >Bhavani Eye Care Hospital</h1>
          <h1 className="font-bold text-[1.5rem] italic">Facilities</h1>
           <p>Eyecare services</p>
        </div>
          <div>
             <h1 className="font-bold italic text-[1.5rem]">Address</h1>

            <p className="flex items-center text-gray-700 dark:text-gray-300 italic">
              <FaMapMarkerAlt className="text-red-500 mr-2" />
              19-22 oppo. Bus Stand, pargi road, Shadnagar-509216
            </p>
            <a
              href="https://www.google.com/maps/place/Bhavani+eye+care+center/@17.068774,78.1983911,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcbc9efb231e907:0x40ac05cb5d68fe8b!8m2!3d17.068774!4d78.200966!16s%2Fg%2F11kw3j71np?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              View on Google Maps
            </a>
          </div>

          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FaPhoneAlt className="text-green-500 mr-2" />
            Emergency: +91-9030092707
          </div>

          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FaEnvelope className="text-yellow-500 mr-2" />
            Email: <a href="mailto:info@hospital.com" className="ml-1 text-blue-500 hover:underline">bherasociety2023@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalSection;
