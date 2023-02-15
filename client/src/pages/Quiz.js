import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { Questionnaire, GameEnd } from "../components";

const Quiz = ({ player, category }) => {
  const navigate = useNavigate();

  if (!player || !category) navigate("/", { replace: true });

  const QUIZ_API_URL = `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple&category=${category}`;

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(QUIZ_API_URL)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(questions);
      });
  }, [QUIZ_API_URL]);

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      // prevent double answers
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }
    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex + 1);
  };

  return questions.length > 0 ? (
    <div className="container">
      <ToastContainer />
      {currentIndex >= questions.length ? (
        <GameEnd player={player} score={score} category={category} />
      ) : (
        <Questionnaire
          data={questions[currentIndex]}
          handleAnswer={handleAnswer}
          showAnswers={showAnswers}
          handleNextQuestion={handleNextQuestion}
        />
      )}
    </div>
  ) : (
    <h2 className="text-2xl text-white font-bold">Loading...</h2>
  );
};

export default Quiz;
