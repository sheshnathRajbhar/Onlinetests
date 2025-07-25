import React from "react";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          IT Tools Course
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Learn essential computer tools including word processing, spreadsheets,
          presentation software, internet browsing, and email.
        </p>

        {/* Course Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-md text-center">
            <h2 className="font-semibold text-blue-700">📄 LibreOffice Writer</h2>
            <p className="text-gray-600 text-sm">Word processing, formatting, and tables</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md text-center">
            <h2 className="font-semibold text-blue-700">📊 LibreOffice Calc</h2>
            <p className="text-gray-600 text-sm">Spreadsheets, formulas, charts</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md text-center">
            <h2 className="font-semibold text-blue-700">📽 LibreOffice Impress</h2>
            <p className="text-gray-600 text-sm">Create professional presentations</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md text-center">
            <h2 className="font-semibold text-blue-700">🌐 Internet & Email</h2>
            <p className="text-gray-600 text-sm">Search engines, email writing & safety</p>
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

export default CourseDetails;
