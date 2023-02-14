import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { ToastContainer } from "react-toastify";

import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

const data = [
  {
    player: "shakil",
    score: 10,
    category: "Movies",
    date: "2023-12-01",
  },
  {
    player: "shakil",
    score: 10,
    category: "Movies",
    date: "2023-12-01",
  },
  {
    player: "shakil",
    score: 10,
    category: "Movies",
    date: "2023-12-01",
  },
];

const Home = ({ player, category, setCategory, setPlayer }) => {
  const navigate = useNavigate();

  const startQuiz = () => {
    if (!player || !category) {
      toast("Name and Category required! 😛", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else {
      navigate("/quiz", { replace: true });
    }
  };

  return (
    <div className="container">
      <div class="grid grid-cols-2 gap-4">
        <div className="flex flex-col bg-white text-purple-800 p-10 rounded shadow-md">
          <h1 className="text-4xl text-center">Trivia Quiz App</h1>
          <p className="text-l text-center mt-2 text-pink-500">
            Play a set of 10 interesting MCQs
          </p>
          <form class="w-full max-w-sm mt-10">
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Name
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  placeholder="Player Name"
                  type="text"
                  value={player}
                  onChange={(e) => setPlayer(e.target.value)}
                ></input>
              </div>
            </div>

            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Category
                </label>
              </div>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Select Category</option>
                  <option value="11">Movies</option>
                  <option value="15">Video Games</option>
                  <option value="20">Mythology</option>
                  <option value="31">Anime & Manga</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
                <button
                  class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={startQuiz}
                >
                  Take Quiz
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col bg-white text-purple-800 p-10 rounded shadow-md">
          <h1 className="text-2xl text-center">Latest High Scores</h1>
          <table className="border-collapse border border-slate-500 mt-6">
            <tr>
              <th className="border border-slate-600">Player</th>
              <th className="border border-slate-600">Score</th>
              <th className="border border-slate-600">Category</th>
              <th className="border border-slate-600">Date</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td className="border border-slate-700">{val.player}</td>
                  <td className="border border-slate-700">{val.score}</td>
                  <td className="border border-slate-700">{val.category}</td>
                  <td className="border border-slate-700">{val.date}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <div className="flex flex-col bg-white text-purple-800 p-2 rounded shadow-md mt-6">
        <div className="flex items-center justify-center">
          <div className="p-1">
            <a
              href="https://github.com/nshosain"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub style={{ color: "#6b21a8", fontSize: "30px" }} />
            </a>
          </div>
          <div className="p-1">
            <a
              href="https://www.linkedin.com/in/nshosain/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin style={{ color: "#6b21a8", fontSize: "30px" }} />
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
