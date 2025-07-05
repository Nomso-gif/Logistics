import { useState } from "react";
import Button from "./Button";

const ContactusForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");

    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-black w-[600px] mx-auto px-6 py-8 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* FullName */}
        <div>
          <label htmlFor="fullName" className="block font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            required
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* phoneNumber */}
        <div className="md:col-span-2 text-left">
          <label htmlFor="phoneNumber" className="block font-medium mb-1">
            Phone Number
          </label>
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            required
            onChange={handleChange}
            placeholder="+234 567 8768 6754"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        {/* Subject */}
        <div className="md:col-span-2">
          <label htmlFor="subject" className="block font-medium mb-1">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            required
            onChange={handleChange}
            placeholder="Enquiry about shipping services"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label htmlFor="message" className="block font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            required
            onChange={handleChange}
            placeholder="Type your message here..."
            rows={4}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 text-center">
        <Button
          type="submit"
          text="Send Message"
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl font-semibold"
        />
      </div>
    </form>
  );
};

export default ContactusForm;
