import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const QuizStartForm = ({ player, category, setCategory, setPlayer }) => {
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
    <div>
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
  );
};

export default QuizStartForm;
