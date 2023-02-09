import React, { useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";

import { Questionnaire, GameEnd } from "../components";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(API_URL)
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
  }, []);

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
        <GameEnd score={score} />
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
