import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import Navigation from "../components/Navigation";
import PaperBox from "../components/PaperBox";

function quiz() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [options, setOptions] = useState([]);
  const [questionScore, setQuestionScore] = useState(0);
  const [buttonColors, setButtonColors] = useState({});

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

      // add: timer
    } else {
      newButtonColors[answer] = "red";
      setButtonColors(newButtonColors);
      alert("Game Over");
      navigate("/game");
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

  return (
    <>
      <Navigation />
      <main>
        <div>
          {currentCharacter ? (
            <PaperBox title={`Question ${questionScore + 1}`}>
              <img
                src={currentCharacter.image}
                alt={currentCharacter.name}
                style={{ width: "300px", height: "400px", objectFit: "cover" }}
              />
              <div>
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    style={{
                      margin: "10px",
                      padding: "10px 20px",
                      background: buttonColors[option] || "black",
                      border: "1px solid black",
                      cursor: "pointer",
                      color: "white",
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
