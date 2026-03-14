import React, { useState } from "react";
import Footer from "../components/Footer";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-lg">

        <h1 className="text-3xl font-bold mb-6 text-center text-[#6a0610] tracking-widest">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:outline-orange-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:outline-orange-500"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:outline-orange-500"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#6a0610] text-white py-3 rounded hover:bg-[#6a0620]"
          >
            Send Message
          </button>

        </form>

      </div>
    
    </section>
     <Footer />
    </>
  );
};

export default Contact;