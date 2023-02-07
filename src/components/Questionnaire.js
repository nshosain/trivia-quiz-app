import React from "react";

const Questionnaire = ({
  handleAnswer,
  data: { question, correct_answer, incorrect_answers },
}) => {
  const shuffledAnswers = shuffleAnswers(correct_answer, incorrect_answers);

  return (
    <div>
      <div className="bg-white text-purple-800 p-10 rounded shadow-md">
        <h2
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {shuffledAnswers.map((answer) => {
          return (
            <button
              className={`${
                correct_answer === answer ? "bg-purple-300" : "bg-white"
              } p-4 text-purple-800 font-semibold rounded shadow`}
              onClick={() => handleAnswer(answer)}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
};

function shuffleAnswers(correct_answer, incorrect_answers) {
  return [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);
}

export default Questionnaire;
