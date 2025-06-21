import React, { useState } from "react";
import axios from "axios";
import Appointmentimage from "../assets/Appointment-image.webp";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    disease_name: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://bherasociety.onrender.com/appointments", formData);
      alert("Appointment booked successfully!");
      setFormData({ name: "", phonenumber: "", disease_name: "" });
    } catch (err) {
      alert("Something went wrong! ❌");
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex justify-center px-4 py-10 sm:py-0 md:py-0">
      <div className="max-w-6xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mt-[4rem] flex flex-col md:flex-row">

        {/* Image Section */}
        <div className="md:w-1/2 w-full">
          <img
            src={Appointmentimage}
            alt="Medical Professional"
            className="object-cover w-full h-full max-h-[500px] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 w-full p-6 sm:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-6">
            Book an Appointment
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="phonenumber" className="block text-gray-700 dark:text-gray-200 mb-1">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phonenumber"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                title="Enter a 10-digit phone number"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="disease_name" className="block text-gray-700 dark:text-gray-200 mb-1">
                Disease Name:
              </label>
              <input
                type="text"
                id="disease_name"
                name="disease_name"
                value={formData.disease_name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300"
            >
              Book Appointment
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AppointmentForm;
