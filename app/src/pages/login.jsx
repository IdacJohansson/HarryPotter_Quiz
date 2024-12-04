import React from "react";
import { useState } from "react";

export default function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  function checkLogin(event) {
    event.preventDefault();

    let isValid = true;
    const errorMsg = { username: "", password: "" };

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username !== storedUsername || password !== storedPassword) {
      errorMsg.username = "Username or password is incorrect.";
      errorMsg.password = "Username or password is incorrect.";
      isValid = false;
    }

    setErrors(errorMsg);

    if (isValid) {
      window.location.href = "/game";
    }
  }
  return (
    <>
    <main>
      <h1>Login</h1>
      <form onSubmit={checkLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <span style={{ color: "red" }}>{errors.username}</span>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <span style={{ color: "red" }}>{errors.password}</span>
        <br />
        <button type="submit">Login</button>
      </form>
      </main>
    </>
  );
}
