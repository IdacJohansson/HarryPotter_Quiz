import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import PaperBox from "../components/PaperBox";
import Navigation from "../components/Navigation";

function quiz() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [options, setOptions] = useState([]);
  const [questionScore, setQuestionScore] = useState(0);
  const [buttonColors, setButtonColors] = useState({});
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    Axios.get("https://hp-api.onrender.com/api/characters").then((res) => {
      const characters = res.data.filter((c) => c.image && c.name);
      setData(characters);
      setupQuestion(characters);
    });
  }, []);

  const setupQuestion = (characters) => {
    const randomCharacter =
      characters[Math.floor(Math.random() * characters.length)];
    const randomOptions = shuffleOptions([
      randomCharacter.name,
      ...getRandomNames(characters, randomCharacter.name),
    ]);

    setCurrentCharacter(randomCharacter);
    setOptions(randomOptions);
    setTimer(7);
  };

  const getRandomNames = (characters, correctName) => {
    const randomNames = [];
    while (randomNames.length < 2) {
      const randomName =
        characters[Math.floor(Math.random() * characters.length)].name;
      if (randomName !== correctName && !randomNames.includes(randomName)) {
        randomNames.push(randomName);
      }
    }
    return randomNames;
  };

  const shuffleOptions = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  const handleAnswer = (answer) => {
    const newButtonColors = { ...buttonColors };
    if (answer === currentCharacter.name) {
      newButtonColors[answer] = "green";
      setButtonColors(newButtonColors);
      setTimeout(() => {
        setQuestionScore(questionScore + 1);
        setupQuestion(data);
        setButtonColors({});
      }, 500);
    } else {
      newButtonColors[answer] = "red";
      setButtonColors(newButtonColors);
      setTimeout(() => {
        alert("Game Over");
        navigate("/game");
      }, 500);
    }
  };

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      window.history.pushState(null, null, window.location.pathname);
    };
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  useEffect(() => {
    console.log("Timer updated: ", timer);
    if (timer > 0) {
      const timerId = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      alert("Time's up! Game Over");
      navigate("/game");
    }
  }, [timer, navigate]);

  return (
    <>
      <main>
        <Navigation />
        <div>
          <div className="time-score-container">
            <div className="score">
              <p>Score: {questionScore}</p>
            </div>
            <div className="timer"> {timer} seconds</div>
          </div>
          {currentCharacter ? (
            <PaperBox title={`Question ${questionScore + 1}`}>
              <img
                className="character-img"
                src={currentCharacter.image}
                alt={currentCharacter.name}
                style={{ objectFit: "cover" }}
              />
              <div className="option-btn-container">
                {options.map((option) => (
                  <button
                    className="option-btn"
                    key={option}
                    onClick={() => handleAnswer(option)}
                    style={{
                      background: buttonColors[option] || "#3d3a33",
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </PaperBox>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </main>
    </>
  );
}

export default quiz;
