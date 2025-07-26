import React from "react";
import { Link } from "react-router-dom";

const IoTCourse = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        {/* Course Header */}
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          Internet of Things (IoT) Course
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Learn how smart devices communicate and build real-time IoT applications.
        </p>

        {/* Modules / Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-md text-center">
            <h2 className="font-semibold text-blue-700">🌐 IoT Fundamentals</h2>
            <p className="text-gray-600 text-sm">Understanding sensors, actuators, and connectivity</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md text-center">
            <h2 className="font-semibold text-blue-700">🔧 Hardware & Sensors</h2>
            <p className="text-gray-600 text-sm">Hands-on with Arduino/Raspberry Pi and modules</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md text-center">
            <h2 className="font-semibold text-blue-700">☁️ Cloud & Data</h2>
            <p className="text-gray-600 text-sm">Connect IoT to cloud for real-time data analysis</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md text-center">
            <h2 className="font-semibold text-blue-700">📱 IoT Projects</h2>
            <p className="text-gray-600 text-sm">Smart home, health monitor, and automation projects</p>
          </div>
        </div>

        {/* Start Learning Button */}
        <div className="text-center mt-6">
          <a href="https://olevelexam.com/internet-of-things-and-its-applications"><button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Start Learning
          </button></a>
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Link to="/courses" className="text-blue-600 hover:underline text-sm">
            ← Back to All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IoTCourse;
