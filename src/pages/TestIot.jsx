import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const TestIoT = () => {
  const courseId = "iot-course-id"; // replace with actual IoT course ID
  const [sets, setSets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSets = async () => {
      try {
        const res = await getSetsByCourses(courseId);
        const pages = res?.totalPages || 0;
        const arr = Array.from({ length: pages }, (_, i) => i + 1);
        setSets(arr);
      } catch (error) {
        console.error("Failed to fetch sets", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSets();
  }, []);

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow rounded p-8">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">IoT Test Sets</h1>

        {loading ? (
          <p>Loading sets...</p>
        ) : sets.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sets.map((set, index) => (
              <Link
                key={index}
                to={`/exam/iot/${set}`}
                className="bg-blue-100 hover:bg-blue-200 text-blue-800 py-2 px-4 rounded text-center"
              >
                Set {set}
              </Link>
            ))}
          </div>
        ) : (
          <p>No sets available.</p>
        )}
      </div>
    </div>
  );
};

export default TestIoT;
