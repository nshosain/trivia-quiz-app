import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { Quiz, Home } from "./pages";

function App() {
  const [category, setCategory] = useState(undefined);
  const [player, setPlayer] = useState(undefined);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              player={player}
              category={category}
              setCategory={setCategory}
              setPlayer={setPlayer}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/quiz"
          element={<Quiz player={player} category={category} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
