import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { categoriesEnum, SERVER_URL } from "../utils/helper";

import { Footer } from "../components";

const saveScore = (player, score, category) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      player: player,
      score: score,
      category: categoriesEnum[category],
    }),
  };
  fetch(`${SERVER_URL}/api/v1/scores`, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const GameEnd = ({ player, score, category }) => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/", { replace: true });
  };

  useEffect(() => {
    saveScore(player, score, category);
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
  }, [player, score, category]);

  return (
    <div className="container text-center">
      <h1 className="text-3xl text-white font-bold">{`${player}'s Score`}</h1>
      <h1 className="text-9xl text-white font-bold">{score}</h1>
      <button
        className="bg-purple-700 text-white p-4 font-semibold rounded shadow mt-6"
        onClick={backToHome}
      >
        Play Again?
      </button>
      <Footer />
    </div>
  );
};

export default GameEnd;
