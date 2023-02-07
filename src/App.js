import { useState, useEffect } from "react";
import "./App.css";

import { Questionnaire } from "./components";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);

    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
  };

  return questions.length > 0 ? (
    <div className="container">
      {currentIndex >= questions.length ? (
        <div className="text-center">
          <h1 className="text-2xl text-white font-bold">-- Game Ended --</h1>
          <h1 className="text-3xl text-white font-bold">Your score</h1>
          <h1 className="text-7xl text-white font-bold">{score}</h1>
        </div>
      ) : (
        <Questionnaire
          data={questions[currentIndex]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  ) : (
    <h2 className="text-2xl text-white font-bold">Loading...</h2>
  );
}

export default App;
