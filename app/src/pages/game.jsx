import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

import Box from "../components/Box";

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
      <main>
        {/* <h1>Enjoy the game!</h1>
      <button onClick={handleLogout}>Logout</button> */}

        <Box title={"Put Your Skills to the Test"} />
      </main>
    </>
  );
}
