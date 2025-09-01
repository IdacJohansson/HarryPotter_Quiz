import { useState, useEffect } from "react";

const audio = new Audio("/school-of-magic.mp3");

export default function BackgroundPlayer() {
  const [isPlaying, setIsPlaying] = useState(() => {
    const saved = localStorage.getItem("bgMusicPlaying");
    return saved === null ? true : JSON.parse(saved);
  });

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.5;

    if (isPlaying) {
      audio.play().catch((error) => console.error("Failed to play:", error));
    } else {
      audio.pause();
    }

    localStorage.setItem("bgMusicPlaying", JSON.stringify(isPlaying));
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
