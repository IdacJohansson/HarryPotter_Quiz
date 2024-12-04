import React from "react";
import Paper from "../assets/paper.png";

function PaperBox({ children }) {
  return (
    <div
      style={{
        position: "relative",
        width: "900px",
        height: "600px",
      }}
    >
      <img
        src={Paper}
        alt="paper-img"
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.8,
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
    // Ändra styles - ta bort inline
  );
}

export default PaperBox;
