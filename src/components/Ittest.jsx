import React, { useState, useEffect } from "react";

const sampleQuestions = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  question: `Question ${i + 1}: What is the answer to question ${i + 1}?`,
  options: ["Option A", "Option B", "Option C", "Option D"],
}));

const TestPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    // Replace with your API call to fetch real questions
    setQuestions(sampleQuestions);
  }, []);

  const handleAnswer = (qId, selectedOption) => {
    setAnswers((prev) => ({
      ...prev,
      [qId]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", answers);
    alert("Test submitted successfully!");
    // You can also POST this data to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Online Test – 100 Questions
        </h1>

        {questions.length > 0 && (
          <div>
            <p className="text-gray-600 mb-2">
              Question {currentQ + 1} of {questions.length}
            </p>
            <h2 className="text-lg font-semibold mb-4">{questions[currentQ].question}</h2>

            <div className="space-y-2 mb-6">
              {questions[currentQ].options.map((opt, index) => (
                <label key={index} className="block">
                  <input
                    type="radio"
                    name={`q-${questions[currentQ].id}`}
                    value={opt}
                    checked={answers[questions[currentQ].id] === opt}
                    onChange={() => handleAnswer(questions[currentQ].id, opt)}
                    className="mr-2"
                  />
                  {opt}
                </label>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mb-4">
              <button
                onClick={() => setCurrentQ((prev) => Math.max(prev - 1, 0))}
                disabled={currentQ === 0}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentQ((prev) => Math.min(prev + 1, questions.length - 1))}
                disabled={currentQ === questions.length - 1}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Next
              </button>
            </div>

            {/* Jump to Question Grid */}
            <div className="grid grid-cols-10 gap-2 text-center mb-6">
              {questions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentQ(i)}
                  className={`py-1 rounded ${
                    answers[questions[i].id]
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Submit Test
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestPage;
