import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

import HighScoreModal from "./HighScoreModal";
import BackgroundPlayer from "./BackgroundPlayer";

export default function Navigation() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const { isLoggedIn } = useContext(AuthContext);
  const [isHighScoreOpen, setIsHighScoreOpen] = useState(false);

  const openModal = () => {
    setIsHighScoreOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    setIsLoggedIn(false);
  };

  return (
    <nav>
      {isLoggedIn && (
        <NavLink className="link-text" to="/game">
          New Game
        </NavLink>
      )}
      {isLoggedIn && (
        <button className="link-text" onClick={openModal}>
          High Score
        </button>
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
      {/* <BackgroundPlayer /> */}
    </nav>
  );
}
