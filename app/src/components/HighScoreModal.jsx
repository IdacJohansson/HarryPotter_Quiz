import React, { useEffect, useState } from "react";

function HighScoreModal({ onClose, isOpen }) {
  const [highScore, setHighScore] = useState([]);

  useEffect(() => {
    if (isOpen) {
      const highScoreData = JSON.parse(
        localStorage.getItem("highScores") || "[]"
      ); 
      setHighScore(highScoreData);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="high-score-modal-container">
      <div className="high-score-modal-content">
        <h2 className="high-score-heading">High Scores TOP 5</h2>
        <ul className="high-score-ul">
          {highScore.length > 0 ? (
            highScore.map((score, index) => (
              <li className="high-score-li" key={index}>
                {score.name}: {score.score}
              </li>
            ))
          ) : (
            <p>No high scores yet!</p>
          )}
        </ul>
        <button className="high-score-close-modal-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default HighScoreModal;
