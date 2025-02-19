
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../components/Navigation";
import StartButton from "../components/StartButton";
import PaperBox from "../components/PaperBox";

import wandAnimation from '../assets/animation.json';
import Lottie from "lottie-react";

export default function Game() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handelStartQuiz = () => {
    setLoading(true); 
    setTimeout(() => {
      navigate("/quiz"); 
    }, 4000);
  };

  return (
    <>
      <main>
        <Navigation />
        <div className="game-container">
            <PaperBox>
              <div className="typing-text">
                <p>Welcome to the Harry Potter Quiz!</p>
                <p>Now it's time to put your character-</p>
                <p>skills to the test.. Imperio!</p>
              </div>
              <StartButton onClick={handelStartQuiz} />
              <Lottie className="wandAnimation" animationData={wandAnimation} loop={true}></Lottie>
            </PaperBox>
        </div>
      </main>
    </>
  );
}
