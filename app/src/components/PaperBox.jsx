import React from "react";
import Paper from "../assets/paper.png";
import Book from "../assets/book.png";
import Golden from "../assets/golden.jpg";
import Wand from "../assets/magicwand.png";

function PaperBox({ children }) {
  return (
    <div className="paper-box-container">
      <img src={Wand} alt="paper-img" className="paper-img" />
      <div className="content">
        <h1 className="game-heading"></h1>
        {children}
      </div>
    </div>
  );
}

export default PaperBox;
