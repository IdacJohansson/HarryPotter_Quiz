import React from "react";
import Paper from "../assets/paper.png";

function PaperBox({ children }) {
  return (
    <div className="paper-box-container">
      <img src={Paper} alt="paper-img" className="paper-img" />
      <div className="content">
        <h1 className="game-heading"></h1>
        {children}
      </div>
    </div>
  );
}

export default PaperBox;
