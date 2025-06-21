import React from "react";
import doctorImage from "../assets/Drphoto.png";
// Replace this with your local image or path to Dr. Reddy’s photo

const DrProfile = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 px-6 py-12 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* Doctor Image */}
        <div className="flex-shrink-0 w-64 h-64">
          <img
            src={doctorImage}
            alt="Dr. Daravath Reddy"
            className="w-full h-full object-cover rounded-full shadow-xl"
          />
        </div>

        {/* Info */}
        <div className="flex-1 text-gray-800 dark:text-gray-100">
          <h2 className="text-3xl font-bold mb-2">Dr. Daravath Reddy</h2>
          <h3 className="text-blue-500 text-lg font-medium mb-4">
            Visionary in Healthcare & Social Welfare
          </h3>
          <p className="text-md mb-4">
            Dr. Reddy is a dedicated medical professional with over 13 years of service in preventive healthcare,
            ophthalmology, and rural development. He has transformed eye care access across Telangana, especially for
            underserved communities.
          </p>

          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-lg">🎓 Education</h4>
              <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-gray-300">
                <li>Bachelor of Ayurvedic Medicine and Surgery (BAMS) – 2012</li>
                <li>Postgraduate in Psychology – 2016</li>
                <li>Doctor of Pharmacy (Pharm-D) – Expected 2025</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg">🏥 Achievements</h4>
              <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-gray-300">
                <li>1,450+ eye screening camps across rural/urban Telangana</li>
                <li>16,000+ free cataract surgeries performed</li>
                <li>23,000+ free optical frames distributed</li>
                <li>Government school vision screening initiatives</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg">🌍 Social Leadership</h4>
              <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-gray-300">
                <li>Chairman, BHERA Society</li>
                <li>Founder, Shree Sathya Lion’s Eye Hospital (2023)</li>
                <li>Managing Director, Bhavani Eye Care Centre (2020)</li>
                <li>Treasurer, Lions Club Shadnagar (Since 2016)</li>
                <li>Managing 14 old-age homes for senior citizens</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg">💡 Expertise</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Fundraising, hospital administration, health awareness, strategic partnerships, and
                capacity building in rural healthcare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrProfile;
