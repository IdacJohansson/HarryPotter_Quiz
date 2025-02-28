import React from "react";


function PaperBox({ children }) {
  return (
    <div className="paper-box-container">
      <div className="content-container">
      <div className="content">
        <h1 className="game-heading"></h1>
        {children}
      </div>
      </div>
    </div>
  );
}

export default PaperBox;
