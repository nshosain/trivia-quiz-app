import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

const GameEnd = ({ score }) => {
  useEffect(() => {
    toast("Game Ended! 😎", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  }, []);

  return (
    <div className="container text-center">
      <h1 className="text-3xl text-white font-bold">Your score</h1>
      <h1 className="text-9xl text-white font-bold">{score}</h1>
      <button className="bg-purple-700 text-white p-4 font-semibold rounded shadow mt-6">
        Play Again?
      </button>
      <div className="flex place-content-center mt-6">
        <a href="https://github.com/nshosain" target="_blank" rel="noreferrer">
          <AiOutlineGithub style={{ color: "white", fontSize: "30px" }} />
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/nshosain/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin style={{ color: "white", fontSize: "30px" }} />
        </a>
      </div>
    </div>
  );
};

export default GameEnd;
