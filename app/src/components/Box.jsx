import React from "react";

import StartButton from "./StartButton";

function Box({ title, children }) {
  return (
    <div className="welcome-container">
      {/* put the image component here: <Image />*/}

      <h1 className="welcome-heading">{title}</h1>
      <br></br>
      {children}
    </div>
  );
}

export default Box;
