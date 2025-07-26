import React from "react";
import { useParams } from "react-router-dom";

const CertificatePage = () => {
  const { courseId, studentName } = useParams();

  const currentDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div
        className="border-8 border-yellow-500 bg-white shadow-xl p-10 text-center w-full max-w-3xl"
        style={{ fontFamily: "Georgia, serif" }}
      >
        <h1 className="text-3xl font-bold text-gray-700 mb-2">
          Certificate of Completion
        </h1>
        <p className="text-gray-600 text-lg mb-8 italic">
          This is to certify that
        </p>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          {decodeURIComponent(studentName)}
        </h2>
        <p className="text-gray-600 text-lg mb-8">has successfully completed the</p>
        <h3 className="text-xl font-semibold text-green-700 mb-4 uppercase">{courseId}</h3>
        <p className="text-gray-500 mb-8">Date: {currentDate}</p>

        <div className="flex justify-between items-center mt-10 px-8">
          <div>
            <p className="border-t border-black w-32 mx-auto mb-1" />
            <p className="text-sm text-gray-600">Instructor</p>
          </div>
          <div>
            <p className="border-t border-black w-32 mx-auto mb-1" />
            <p className="text-sm text-gray-600">Signature</p>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-10">
          <button
            onClick={() => window.print()}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Download / Print Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
