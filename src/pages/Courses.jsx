import React from "react";

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Our Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

         {/* IT Tools */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">IT Tools</h2>
          <p className="text-gray-600 mb-4">Master LibreOffice, email, internet, and more.</p>
          <a href="/CourseDetails"><button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Course
          </button>
          </a>
        </div>


        {/* Web Development */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Web Development</h2>
          <p className="text-gray-600 mb-4">Learn HTML, CSS, JavaScript, and React.</p>
          <a href="/CourseDetails2"><button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Course
          </button></a>
        </div>

        {/* Python Programming */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Python Programming</h2>
          <p className="text-gray-600 mb-4">Start from basics to advanced Python topics.</p>
          <a href="/CourseDetails3"><button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Course
          </button></a>
        </div>

       

        {/* IoT (NEW COURSE) */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img
  src="/assets/iot.jfif"
  alt="IoT Banner"
  className="w-full rounded-md mb-6"
/>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">IoT (Internet of Things)</h2>
          <p className="text-gray-600 mb-4">Explore sensors, automation, and smart devices.</p>
         <a href="/CourseDetails4"><button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Course
          </button></a>
        </div>
      </div>
    </div>
  );
};

export default Courses;
