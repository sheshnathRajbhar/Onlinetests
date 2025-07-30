import React, { useEffect, useState } from "react";
import axios from "axios";

const UploadQuestion = () => {
  const [courses, setCourses] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");
  const [formData, setFormData] = useState({
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: "",
  });

  useEffect(() => {
    axios.get("/api/courses").then((res) => {
      setCourses(res.data.data || []);
    });
  }, []);

  useEffect(() => {
    if (selectedCourse) {
      axios.get(`/api/chapters/${selectedCourse}`).then((res) => {
        setChapters(res.data.data || []);
      });
    } else {
      setChapters([]);
    }
  }, [selectedCourse]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const questionPayload = {
      courseId: selectedCourse,
      chapterId: selectedChapter,
      question: formData.question,
      options: [
        formData.optionA,
        formData.optionB,
        formData.optionC,
        formData.optionD,
      ],
      correctAnswer: formData.correctAnswer,
    };

    try {
      await axios.post("/api/questions", questionPayload);
      alert("Question uploaded successfully!");
      setFormData({
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error uploading question.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 mt-8 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Upload Question
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Course */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Course
          </label>
          <select
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">-- Choose Course --</option>
            {courses.map((course) => (
              <option key={course._id} value={course._id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>

        {/* Chapter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Chapter
          </label>
          <select
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={selectedChapter}
            onChange={(e) => setSelectedChapter(e.target.value)}
          >
            <option value="">-- Choose Chapter --</option>
            {chapters.map((chapter) => (
              <option key={chapter._id} value={chapter._id}>
                {chapter.name}
              </option>
            ))}
          </select>
        </div>

        {/* Question */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Question
          </label>
          <textarea
            name="question"
            required
            rows="3"
            value={formData.question}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Options */}
        {["A", "B", "C", "D"].map((letter) => (
          <div key={letter}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Option {letter}
            </label>
            <input
              required
              name={`option${letter}`}
              type="text"
              value={formData[`option${letter}`]}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        ))}

        {/* Correct Answer */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Correct Answer
          </label>
          <select
            required
            name="correctAnswer"
            value={formData.correctAnswer}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">-- Select Correct Option --</option>
            <option value={formData.optionA}>A</option>
            <option value={formData.optionB}>B</option>
            <option value={formData.optionC}>C</option>
            <option value={formData.optionD}>D</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-blue-700"
        >
          Upload Question
        </button>
      </form>
    </div>
  );
};

export default UploadQuestion;
