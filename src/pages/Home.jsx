import React from "react";
import it from "../assets/it.webp"
import web from "../assets/web.webp"
import python from "../assets/python.jfif"
import iot from "../assets/iot.webp"

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 mt-10">
      {/* Main Content */}
      <div className="flex items-center justify-center px-4 py-10">
        <div className="text-center max-w-5xl w-full">
          <header className="mb-10">
            <h1 className="text-4xl font-bold text-blue-700">Welcome to LearnHub</h1>
            <p className="text-gray-600 mt-2">
              Your gateway to easy and interactive learning
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800">📚 Courses</h2>
              <p className="text-gray-600 mt-2">
                Explore tech and non-tech courses for all levels.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800">🧪 Tests & Quizzes</h2>
              <p className="text-gray-600 mt-2">
                Practice with chapter-wise and full mock tests.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800">🎓 Certificates</h2>
              <p className="text-gray-600 mt-2">
                Earn and share certificates after course completion.
              </p>
            </div>
          </section>
 <div className="min-h-screen bg-gray-100 px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Our Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

       {/* IT Tools */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
                     <img
    src={it}
    alt="IoT Banner"
    className="w-full rounded-md mb-6"
  />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">IT Tools</h2>
            <p className="text-gray-600 mb-4">Master LibreOffice, email, internet, and more.</p>
            <a href="/CourseDetails"><button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Course
            </button>
            </a>
          </div>

        
     
             {/* Web Development */}
             <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <img
       src={web}
       alt="IoT Banner"
       className="w-full rounded-md mb-6"
     />
               <h2 className="text-xl font-semibold text-gray-800 mb-2">Web Development</h2>
               <p className="text-gray-600 mb-4">Learn HTML, CSS, JavaScript, and React.</p>
               <a href="/CourseDetails2"><button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                 View Course
               </button></a>
             </div>
     

        {/* Python Programming */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                   <img
  src={python}
  alt="IoT Banner"
  className="w-full rounded-md mb-6"
/>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Python Programming</h2>
          <p className="text-gray-600 mb-4">Start from basics to advanced Python topics.</p>
          <a href="/CourseDetails3"><button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Course
          </button></a>
        </div>


       

            {/* IoT (NEW COURSE) */}
                 <div className="bg-white rounded-lg shadow-md p-6 text-center">
                   <img
           src={iot}
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
        
        </div>
      </div>
    </div>
  );
};

export default Home;
