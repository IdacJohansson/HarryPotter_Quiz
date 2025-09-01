import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../components/Navigation";
import StartButton from "../components/StartButton";
import PaperBox from "../components/PaperBox";

import wandAnimation from "../assets/animation.json";
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
          <PaperBox variant="game">
            <div className="typing-text">
              <p>Welcome to the Harry Potter character Quiz!</p>
              <p>The ultimate quiz of characters from Harry Potter.</p>
              <p>As Dumbledore once said,</p>
              <p>“It is our choices that show what we truly are,</p>
              <p>far more than our abilities.” Choose wisely!</p>
            </div>
            <div className="start-btn-container">
              <StartButton onClick={handelStartQuiz} />
              <Lottie
                className="wandAnimation"
                animationData={wandAnimation}
                loop={true}
              ></Lottie>
            </div>
          </PaperBox>
        </div>
      </main>
    </>
  );
}
