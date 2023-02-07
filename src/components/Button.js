import React from "react";

const Button = ({ answer }) => {
  return (
    <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">
      {answer}
    </button>
  );
};

export default Button;
