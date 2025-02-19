import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../components/Navigation";
import StartButton from "../components/StartButton";
import PaperBox from "../components/PaperBox";

export default function Game() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const startQuiz = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/quiz");
    }, 6000);
  };

  return (
    <>
      <main>
        <Navigation />
        <div className="game-container">
          <PaperBox>
            <div className="typing-text">
              <p>Welcome to the Harry Potter Quiz!</p>
              <p>Now is time to put your character-</p>
              <p>skills to the test.. Imperio!</p>
            </div>
            <StartButton onClick={startQuiz} />
          </PaperBox>
        </div>
      </main>
    </>
  );
}
