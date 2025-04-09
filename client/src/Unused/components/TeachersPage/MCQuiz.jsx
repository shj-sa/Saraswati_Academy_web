import React, { useState } from "react";
import Sidebar from "./Sidebar";

const mcqQuestions = [
  {
    question: "What is the capital of France?",
    image: "https://via.placeholder.com/150",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    image: "https://via.placeholder.com/150",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
];

const MCQQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === mcqQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < mcqQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6">
        <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 w-full max-w-md sm:max-w-lg text-center">
          {quizFinished ? (
            <h2 className="text-xl font-bold">
              Quiz Completed! 🎉 Your Score: {score}/{mcqQuestions.length}
            </h2>
          ) : (
            <>
              <h1 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">
                📝 MCQ Quiz
              </h1>
              <img
                src={mcqQuestions[currentQuestionIndex].image}
                alt="Question"
                className="mb-4 w-full h-40 object-cover rounded-lg shadow"
              />
              <h2 className="text-lg font-semibold mb-4">
                {mcqQuestions[currentQuestionIndex].question}
              </h2>
              <div className="w-full flex flex-col space-y-2">
                {mcqQuestions[currentQuestionIndex].options.map(
                  (option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(option)}
                      className={`p-3 rounded-lg border ${
                        selectedOption === option
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
              <button
                onClick={handleNextQuestion}
                className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
                disabled={!selectedOption}
              >
                {currentQuestionIndex + 1 < mcqQuestions.length
                  ? "Next"
                  : "Finish"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MCQQuiz;
