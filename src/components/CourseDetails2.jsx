import React from "react";
import { Link } from "react-router-dom";

const WebDesigning = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          Web Designing Course
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Learn to build beautiful, responsive websites using HTML, CSS, and JavaScript.
        </p>

        {/* Course Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-md text-center">
            <h2 className="font-semibold text-blue-700">🧱 HTML5</h2>
            <p className="text-gray-600 text-sm">Structure your web pages properly</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md text-center">
            <h2 className="font-semibold text-blue-700">🎨 CSS3</h2>
            <p className="text-gray-600 text-sm">Style your pages with layout and animation</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md text-center">
            <h2 className="font-semibold text-blue-700">⚙ JavaScript</h2>
            <p className="text-gray-600 text-sm">Add interactivity and DOM manipulation</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md text-center">
            <h2 className="font-semibold text-blue-700">📱 Responsive Design</h2>
            <p className="text-gray-600 text-sm">Make websites mobile and tablet friendly</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Start Learning
          </button>
        </div>

        {/* Back to Courses */}
        <div className="text-center mt-6">
          <Link to="/courses" className="text-blue-600 hover:underline text-sm">
            ← Back to All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebDesigning;
