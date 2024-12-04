import React from "react";

import StartButton from "./StartButton";

import Image from "./ImageComponent";

function Box({ title, children }) {
  return (
    <div className="welcome-container">
      {/* put the image component here: <Image />*/}

      <Image src={imageSrc} alt={imageAlt} />

      <h1 className="welcome-heading">{title}</h1>
      <br></br>
      {children}
    </div>
  );
}

export default Box;
