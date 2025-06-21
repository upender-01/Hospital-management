import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 px-6 py-12 md:px-20">
      <div className="max-w-5xl mx-auto text-gray-800 dark:text-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="mb-4">
          <strong>BHERA Society</strong> is committed to protecting the privacy of all patients,
          donors, volunteers, and visitors. This policy outlines how we handle your data.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1️⃣ Information We Collect</h2>
        <ul className="list-disc ml-6 mb-4 text-sm md:text-base">
          <li>Personal details (name, phone number, email, address)</li>
          <li>Medical records related to treatment and care</li>
          <li>Donation and volunteer records</li>
          <li>Communication history (queries, feedback)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2️⃣ How We Use Your Information</h2>
        <ul className="list-disc ml-6 mb-4 text-sm md:text-base">
          <li>To provide medical care and manage appointments</li>
          <li>To maintain accurate patient records securely</li>
          <li>To share updates on health initiatives</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3️⃣ Data Sharing</h2>
        <p className="mb-4 text-sm md:text-base">
          We do not sell or rent your personal data. We may share data:
        </p>
        <ul className="list-disc ml-6 mb-4 text-sm md:text-base">
          <li>With medical staff for treatment</li>
          <li>With government authorities when required by law</li>
          <li>With partner NGOs in joint programs (with safeguards)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4️⃣ Data Security</h2>
        <p className="mb-4 text-sm md:text-base">
          We use secure systems and limit access to sensitive data to protect your information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5️⃣ Your Rights</h2>
        <ul className="list-disc ml-6 mb-4 text-sm md:text-base">
          <li>Request access to your data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of data where applicable</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6️⃣ Contact Us</h2>
        <p className="text-sm md:text-base">
          BHERA Society, 18-397/9/633, Shadnagar, Rangareddy, Telangana <br />
          📞 <a href="tel:+918074995761" className="text-blue-500 hover:underline">+91 8074995761</a> <br />
          ✉ <a href="mailto:bherasociety2023@gmail.com" className="text-blue-500 hover:underline">bherasociety2023@gmail.com</a>
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
