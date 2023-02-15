import React, { useState, useEffect } from "react";
import { formatDate, SERVER_URL } from "../utils/helper";

import { toast } from "react-toastify";

const LatestHighScores = () => {
  const [latestScores, setLatestScores] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${SERVER_URL}/api/v1/scores`);
    if (!response.ok) {
      throw new Error("Data could not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((data) => {
        setLatestScores(data.scores);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-center">Latest High Scores</h1>
      {latestScores && (
        <table className="border-collapse border border-slate-500 mt-6">
          <tr>
            <th className="border border-slate-600 p-1">Player</th>
            <th className="border border-slate-600 p-1">Score</th>
            <th className="border border-slate-600 p-1">Category</th>
            <th className="border border-slate-600 p-1">Date</th>
          </tr>
          {latestScores.map((val, key) => {
            return (
              <tr key={key}>
                <td className="border border-slate-700 p-1">{val.player}</td>
                <td className="border border-slate-700 p-1">{val.score}</td>
                <td className="border border-slate-700 p-1">{val.category}</td>
                <td className="border border-slate-700 p-1">
                  {formatDate(val.createdAt)}
                </td>
              </tr>
            );
          })}
        </table>
      )}
    </div>
  );
};

export default LatestHighScores;
