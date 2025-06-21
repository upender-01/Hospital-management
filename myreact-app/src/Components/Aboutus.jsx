import React from "react";
import doctorIcon from "../assets/1-14.jpg";
import Treasure1 from "../assets/Lokesh.jpg";
import Secretary from "../assets/secretary.jpg";
import Treasure2 from "../assets/venu.jpg";
import Drphoto from "../assets/Drphoto.png";
const team = [
  {
    name: "Dr. D. Reddy",
    role: "President",
    image: Drphoto,
    bio: "Founder of BHERA Society and Shree Sathya Lion’s Eye Hospital, with 13+ years of experience in rural healthcare, ophthalmology, and social service. A passionate leader serving underserved communities in Telangana.",
  },
  {
    name: "Bhukya Bhavani",
    role: "Secretary",
    image: Secretary,
    bio: "Managing Director of Bhavani Eye Care Centre. Oversees daily operations and outreach. Committed to providing quality eye care and empowering women in healthcare leadership.",
  },
  {
    name: "Jatoth Lokesh",
    role: "Treasurer",
    image: Treasure1,
    bio: "Dedicated treasurer managing funds and resource allocation. Known for his strategic planning and transparent accounting in support of free medical and eye care initiatives.",
  },
  {
    name: "Jatoth Venu",
    role: "Treasurer",
    image: Treasure2,
    bio: "Co-treasurer focused on donor relations, fundraising events, and administrative logistics for medical camps and old-age home support services.",
  },
];

const Aboutus = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 px-4 md:px-20">
      {/* Top About Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={doctorIcon}
            alt="Doctor Icon"
            className="w-full h-auto max-h-[60vh] object-contain mx-auto shadow-lg shadow-black/50 hover:scale-105 transition-transform"
          />
        </div>

        <div className="w-full md:w-1/2">
          <span className="text-blue-600 font-semibold text-sm uppercase bg-blue-100 px-3 py-1 inline-block rounded">
            About Us
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-4 mb-4">
            Bhera Society: Vision for Rural Healthcare
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
            <strong>Bhera Society</strong> is a non-profit healthcare and social welfare organization
            founded by <strong>Dr. D. Reddy Naik</strong>. It provides affordable, quality medical services
            to underserved communities, especially in Telangana.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            It runs <strong>Sree Sathya Lions Eye Hospital</strong> (Mahabubabad) and
            <strong> Bhavani Eye Hospital</strong> (Shadnagar), offering free eye care, surgeries,
            and awareness programs.
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
        <div className="bg-red-500 p-6 rounded-lg text-center shadow-lg shadow-red-500/50">
          <h4 className="text-4xl font-bold">16,000+</h4>
          <p className="text-lg mt-2 uppercase">Free Cataract Surgeries</p>
        </div>
        <div className="bg-red-500 p-6 rounded-lg text-center shadow-lg shadow-red-500/50">
          <h4 className="text-4xl font-bold">1,450+</h4>
          <p className="text-lg mt-2 uppercase">Eye Screening Camps</p>
        </div>
        <div className="bg-red-500 p-6 rounded-lg text-center shadow-lg shadow-red-500/50">
          <h4 className="text-4xl font-bold">23,000+</h4>
          <p className="text-lg mt-2 uppercase">Free Optical Frames Distributed</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Our Team
        </h3>
        <div className="max-w-5xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32  object-cover rounded-full mb-4 shadow-md"
              />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                {member.name}
              </h4>
              <p className="text-blue-500 dark:text-blue-400 text-sm font-medium mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
