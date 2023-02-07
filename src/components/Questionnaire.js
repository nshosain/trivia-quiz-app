import React from "react";
import Button from "./Button";

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
        <Button
          onClick={() => handleAnswer(shuffledAnswers[0])}
          answer={shuffledAnswers[0]}
        />
        <Button
          onClick={() => handleAnswer(shuffledAnswers[1])}
          answer={shuffledAnswers[1]}
        />
        <Button
          onClick={() => handleAnswer(shuffledAnswers[2])}
          answer={shuffledAnswers[2]}
        />
        <Button
          onClick={() => handleAnswer(shuffledAnswers[3])}
          answer={shuffledAnswers[3]}
        />
      </div>
    </div>
  );
};

function shuffleAnswers(correct_answer, incorrect_answers) {
  return [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);
}

export default Questionnaire;
