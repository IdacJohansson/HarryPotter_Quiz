import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import { MusicContext } from "../contexts/MusicContext";

import HighScoreModal from "./HighScoreModal";
import BackgroundPlayer from "./BackgroundPlayer";

export default function Navigation() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [isHighScoreOpen, setIsHighScoreOpen] = useState(false);
  const { isPlaying, setIsPlaying } = useState(MusicContext);

  const openModal = () => {
    setIsHighScoreOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("highScores");
    localStorage.removeItem("bgMusicPlaying");
    setIsLoggedIn(false);
    setIsPlaying(false);
  };

  return (
    <nav>
      {isLoggedIn && (
        <NavLink className="link-text" to="/game">
          New Game
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink className="link-text" onClick={openModal}>
          High Score
        </NavLink>
      )}
      {isHighScoreOpen && (
        <HighScoreModal
          onClose={() => setIsHighScoreOpen(false)}
          isOpen={isHighScoreOpen}
        />
      )}

      <NavLink className="link-text" onClick={handleLogout}>
        Logout
      </NavLink>
      <BackgroundPlayer />
    </nav>
  );
}
