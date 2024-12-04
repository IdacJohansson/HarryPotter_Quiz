import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Button() {
  const navigate = useNavigate();
  const [navToGame, SetNavToGame] = useState();
  const [navToQuiz, SetNavToQuiz] = useState();

  const handleNavigateToGame = () => {
    SetNavToGame(navigateToGame);
  };

  const handleNavigateToQuiz = () => {
    SetNavToQuiz(navigateQuiz);
  };

  const navigateToGame = () => {
    navigate("/game");
  };

  const navigateQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div>
      <button className="start-btn">Start Quiz</button>
    </div>
  );
}

export default Button;
