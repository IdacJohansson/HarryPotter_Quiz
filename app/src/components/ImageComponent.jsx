import React from "react";

function Image({ src, alt }) {
  return (
    <div className="image-container">
      <img className="image" src={src} alt={alt} />
    </div>
  );
}

export default Image;