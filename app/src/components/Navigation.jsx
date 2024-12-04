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
      <NavLink className="link-test" to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className="link-test" to="/game">
          Game
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink className="link-test" to="/quiz">
          Quiz
        </NavLink>
      )}
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
