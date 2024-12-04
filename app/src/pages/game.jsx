import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Game() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <h1>Enjoy the game!</h1>
      <button onClick={handleLogout}>Logout</button>

      {/* One button to start the game */}
    </>
  );
}
