import React from "react";

import Button from "./Button";

function Box({ title }) {
  return (
    <div className="welcome-container">
      {/* put the image component here: <Image />*/}

      <h1 className="welcome-heading">{title}</h1>
      <br></br>
      <Button />
    </div>
  );
}

export default Box;
