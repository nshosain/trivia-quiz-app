import { ToastContainer } from "react-toastify";

import { Footer, LatestHighScores, QuizStartForm } from "../components";

const Home = ({ player, category, setCategory, setPlayer }) => {
  return (
    <div className="container">
      <div class="grid grid-cols-2 gap-4">
        <div className="flex flex-col bg-white text-purple-800 p-10 rounded shadow-md">
          <QuizStartForm
            player={player}
            category={category}
            setCategory={setCategory}
            setPlayer={setPlayer}
          />
        </div>
        <div className="flex flex-col bg-white text-purple-800 p-10 rounded shadow-md">
          <LatestHighScores />
        </div>
      </div>
      <div className="flex flex-col bg-white text-purple-800 p-2 rounded shadow-md mt-6">
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
