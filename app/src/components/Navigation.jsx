import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  const { isLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav>
      {isLoggedIn && (
        <NavLink className="link-text" to="/game">
          New Game
        </NavLink>
      )}
      <NavLink className="link-text" onClick={handleLogout}>
        Logout
      </NavLink>
    </nav>
  );
}
