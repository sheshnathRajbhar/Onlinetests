import { useParams, useNavigate } from "react-router-dom";
import React from 'react';

const TestPage = () => {
  const { courseId, setNumber } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(90 * 60); // 1 hour 30 mins

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["questions", courseId, setNumber],
    queryFn: () => getQuestionsByCourseSet(courseId, setNumber),
  });

  const handleOptionChange = (questionId, selectedOption) => {
    setAnswers((prev) => ({ ...prev, [questionId]: selectedOption }));
  };

  const handleNext = () => {
    if (currentIndex < data.questions.length - 1)
      setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = () => {
    // Submit logic (send answers to backend)
    console.log("Submitted answers:", answers);
    alert("Test submitted!");
    navigate("/"); // Go to home or result page
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  if (isLoading) return <p>Loading questions...</p>;
  if (isError) return <p>{error.message}</p>;
  if (!data.success || data.questions.length === 0)
    return <p>No questions found.</p>;

  const question = data.questions[currentIndex];

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Set {setNumber}</h2>
        <p className="text-red-500 font-bold">Time Left: {formatTime(timeLeft)}</p>
      </div>

      <div>
        <p className="font-medium mb-2">
          Q{currentIndex + 1}. {question.question}
        </p>
        <div className="space-y-2">
          {["a", "b", "c", "d"].map((opt) => (
            <label key={opt} className="block">
              <input
                type="radio"
                name={`q-${question._id}`}
                value={opt}
                checked={answers[question._id] === opt}
                onChange={() => handleOptionChange(question._id, opt)}
                className="mr-2"
              />
              {question[opt]}
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>

        {currentIndex === data.questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default TestPage;
