import React from "react";
import alrauneImg from "../assets/alraune.png";

function GameOverModal({ isOpen, onClose, message, onShowHighScore }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="game-over-modal-container">
      <div className="game-over-modal-content">
        <img className="game-over-img" src={alrauneImg} alt="" />
        <p className="game-over-modal-msg">{message}</p>
        <div className="game-over-modal-btn-container">
          <button className="high-score-modal-btn" onClick={onShowHighScore}>
            High Score
          </button>
          <button className="game-over-modal-btn" onClick={onClose}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
export default GameOverModal;
