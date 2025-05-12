import React from "react";

function PaperBox({ children, variant }) {
  return (
    <div className="paper-box-container">
      <div className="content-container">
        <div className={`content ${variant}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default PaperBox;
