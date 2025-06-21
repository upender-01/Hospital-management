import React from "react";
// Example images (replace with actual paths)
import HospitalSection from "./Hospitalsection";
import eyeCareImg from "../assets/eye-care.jpg";
import medicalCampImg from "../assets/medical-camp.jpg";
import oldAgeHomeImg from "../assets/old-agehome.jpg";
import awarenessImg from "../assets/awareness.jpg";
const services = [
  {
    title: "Free Eye Care Services",
    image: eyeCareImg,
    description:
      "We conduct 1,450+ eye screening camps and 16,000+ free cataract surgeries, along with 23,000+ free eyewear distributions.",
  },
  {
    title: "Mobile Medical Camps",
    image: medicalCampImg,
    description:
      "Regular medical camps every alternate day providing essential checkups and minor treatments in remote areas.",
  },
  {
    title: "Old Age Home Services",
    image: oldAgeHomeImg,
    description:
      "Managing 14 old age homes offering shelter, healthcare, and rehabilitation for the elderly.",
  },
  {
    title: "Health Awareness Programs",
    image: awarenessImg,
    description:
      "Health education, hygiene sessions in girls' hostels, and nutritional aid programs for underprivileged groups.",
  },
];

const Services = () => {
  return (
    <div className="py-10 px-5 md:px-16 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Our Services
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl  transition-shadow duration-300  transition hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                {service.description} 
              </p>
            </div>
          </div>
        ))}
      </div>
      {/**our hospital Section */}
      <HospitalSection/>
    </div>
  );
};

export default Services;
