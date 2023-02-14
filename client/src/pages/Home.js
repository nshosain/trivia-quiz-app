import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { ToastContainer } from "react-toastify";

import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

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
    <div>
      <div>
        <h1>Trivia Quiz App</h1>
        <input
          placeholder="Username..."
          onChange={(e) => setPlayer(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option>-- Select Category --</option>
          <option value="11">Movies</option>
          <option value="15">Video Games</option>
          <option value="20">Mythology</option>
          <option value="31">Anime & Manga</option>
        </select>

        <button onClick={startQuiz}>Take Quiz</button>

        <div>
          <a
            href="https://github.com/nshosain"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub style={{ color: "black", fontSize: "30px" }} />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/nshosain/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin style={{ color: "black", fontSize: "30px" }} />
          </a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
