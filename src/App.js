import { useState, useEffect } from "react";
import "./App.css";

import { Questionnaire } from "./components";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  const handleAnswer = () => {
    // check for the answer
  };

  return questions.length > 0 ? (
    <div className="container">
      <Questionnaire data={questions[0]} handleAnswer={handleAnswer} />
    </div>
  ) : (
    <h2 className="text-2xl text-white font-bold">Loading...</h2>
  );
}

export default App;
