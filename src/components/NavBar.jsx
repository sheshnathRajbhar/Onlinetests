import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-700">LearnHub</div>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="/" className="hover:text-blue-600">Home</a>
          </li>
          <li>
            <a href="/courses" className="hover:text-blue-600">Courses</a>
          </li>
          <li>
            <a href="#tests" className="hover:text-blue-600">Tests</a>
          </li>
          <li>
            <a href="#certificates" className="hover:text-blue-600">Certificates</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
