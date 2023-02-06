import { useState } from "react";
import "./App.css";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple";

function App() {
  const [questions, setQuestions] = useState({});
  return (
    <div className="container">
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl">
          1. This is where we're going to have the question.
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">
          Answer 1
        </button>
        <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">
          Answer 2
        </button>
        <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">
          Answer 3
        </button>
        <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">
          Answer 4
        </button>
      </div>
    </div>
  );
}

export default App;
