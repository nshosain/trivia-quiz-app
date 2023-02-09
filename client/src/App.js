import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { Quiz } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
