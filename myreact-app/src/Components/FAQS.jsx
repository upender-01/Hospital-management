import React, { useState } from "react";

const faqs = [
  {
    question: "What is BHERA Society?",
    answer:
      "BHERA Society stands for 'Society for Health, Education, Poverty Alleviation and Rural Development'. It is a non-profit organization working to improve healthcare access and awareness in rural Telangana.",
  },
  {
    question: "What healthcare services are provided?",
    answer:
      "BHERA Society conducts free eye screening camps, cataract surgeries, general health awareness programs, and mobile medical services for underserved areas.",
  },
  {
    question: "Who are the hospitals managed by BHERA Society?",
    answer:
      "They manage Shree Sathya Lion’s Eye Hospital in Mahabubabad and Bhavani Eye Care Centre in Shadnagar, both offering free and subsidized eye care services.",
  },
  {
    question: "Do they charge for medical services?",
    answer:
      "No, the core medical services like eye checkups, cataract surgeries, and distribution of eyeglasses are provided free of cost to economically weaker sections.",
  },
  {
    question: "How do they help old people?",
    answer:
      "BHERA Society manages 14 old age homes that provide shelter, medical care, and rehabilitation to senior citizens.",
  },
  {
    question: "Can I book an appointment online?",
    answer:
      "Yes, appointments can be booked online through their form. You will need to provide basic information such as name, doctor name, and disease description.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-gray-100 dark:bg-gray-900 py-12 px-4 md:px-16  " id="faq">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 font-medium text-lg text-gray-800 dark:text-white flex justify-between items-center"
            >
              {faq.question}
              <span className="ml-2">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600 dark:text-gray-300 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
