import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Navigation() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav>
      <NavLink className="link-test" to="/">
        Home
      </NavLink>
      <NavLink className="link-test" to="/createAccount">
        Create Account
      </NavLink>
      <NavLink className="link-test" to="/login">
        Login
      </NavLink>
      {isLoggedIn && (
        <NavLink className="link-test" to="/game">
          Game
        </NavLink>
      )}
    </nav>
  );
}
