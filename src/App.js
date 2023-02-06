import "./App.css";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple";

function App() {
  return (
    <div className="container">
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl">
          This is where we're going to have the question.
        </h2>
      </div>
      <div className="flex flex-wrap mt-4 justify-around">
        <button className="bg-white w-2/5 p-4 text-purple-800 font-semibold rounded shadow mb-2">
          Answer 1
        </button>
        <button className="bg-white w-2/5 p-4 text-purple-800 font-semibold rounded shadow mb-2">
          Answer 2
        </button>
        <button className="bg-white w-2/5 p-4 text-purple-800 font-semibold rounded shadow">
          Answer 3
        </button>
        <button className="bg-white w-2/5 p-4 text-purple-800 font-semibold rounded shadow">
          Answer 4
        </button>
      </div>
    </div>
  );
}

export default App;
