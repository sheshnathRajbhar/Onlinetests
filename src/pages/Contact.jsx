import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
const Contact = () => {
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Map + Info */}
        <div className="space-y-6">
          {/* About Yourself */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">About Me</h3>
            <p className="text-gray-700">
              Hello! I'm <strong>Sheshnath Rajbhar</strong>, a passionate full-stack developer with experience in React.js, Node.js, MongoDB, Tailwind CSS, and Express. I enjoy building educational tools and LMS systems that help learners grow.
            </p>
          </div>

          {/* Social Links */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Follow Me</h3>
            <div className="flex gap-4 text-2xl text-blue-600">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook className="hover:text-blue-800" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="hover:text-blue-800" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter className="hover:text-blue-800" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub className="hover:text-blue-800" />
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-lg shadow-md">
            <iframe
              title="My Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.819974040173!2d83.56467657418222!3d25.935563401401307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39918b935d47ae71%3A0xf23edc98b79280c!2sSarahu%20Police%20Station!5e1!3m2!1sen!2sin!4v1753517268898!5m2!1sen!2sin" 
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="w-full border-none"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact
