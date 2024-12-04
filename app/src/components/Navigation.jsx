import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Navigation() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/createAccount">Create Account</NavLink>
      <NavLink to="/login">Login</NavLink>
      {isLoggedIn && <NavLink to="/game">Game</NavLink>}
    </nav>
  );
}
