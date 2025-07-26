import React from "react";
import { Link } from "react-router-dom";

const PythonCourse = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          Python Programming Course
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Learn Python from scratch and master data types, loops, functions, and real-world projects.
        </p>

        {/* Course Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-yellow-50 p-4 rounded-md text-center">
            <h2 className="font-semibold text-yellow-700">🐍 Python Basics</h2>
            <p className="text-gray-600 text-sm">Syntax, variables, data types, and operators</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-md text-center">
            <h2 className="font-semibold text-yellow-700">🔁 Loops & Conditionals</h2>
            <p className="text-gray-600 text-sm">Master `if`, `for`, and `while` statements</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-md text-center">
            <h2 className="font-semibold text-yellow-700">🧰 Functions & Modules</h2>
            <p className="text-gray-600 text-sm">Organize code using functions and modules</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-md text-center">
            <h2 className="font-semibold text-yellow-700">📂 File Handling</h2>
            <p className="text-gray-600 text-sm">Read/write files and handle exceptions</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-6">
          <a href="https://olevelexam.com/programming-and-problem-solving-through-python"><button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Start Learning
          </button></a>
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

export default PythonCourse;
