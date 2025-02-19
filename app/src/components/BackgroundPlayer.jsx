import React, { useState, useEffect } from "react";

const audio = new Audio("/school-of-magic.mp3");

export default function BackgroundPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.5;

    if (isPlaying) {
      audio.play().catch((error) => console.error("Failed to play:", error));
    } else {
      audio.pause();
    }

    return () => {};
  }, [isPlaying]);

  return (
    <div>
      <i
        className={
          isPlaying ? "bi bi-volume-up-fill" : "bi bi-volume-mute-fill"
        }
        style={{ fontSize: "24px", cursor: "pointer" }}
        onClick={() => setIsPlaying(!isPlaying)}
      ></i>
    </div>
  );
}
