import React from "react";

import { toast } from "react-toastify";

const Questionnaire = ({
  handleAnswer,
  handleNextQuestion,
  showAnswers,
  data: { question, correct_answer, answers },
}) => {
  const notifyToPickAnswer = () =>
    toast("Pick an answer! 😛", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });

  return (
    <div className="flex flex-col">
      <div className="bg-white text-purple-800 p-10 rounded shadow-md">
        <h2
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {answers.map((answer) => {
          const textColor = showAnswers
            ? answer === correct_answer
              ? "text-green-500"
              : "text-red-500"
            : "text-purple-700";
          return (
            <button
              className={`bg-white ${textColor}
              p-4 font-semibold rounded shadow`}
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>
      <button
        onClick={showAnswers ? handleNextQuestion : notifyToPickAnswer}
        className={`ml-auto ${
          showAnswers ? "bg-purple-700" : "bg-stone-700"
        } text-white
              p-4 font-semibold rounded shadow mt-6`}
      >
        Next Question
      </button>
    </div>
  );
};

export default Questionnaire;
