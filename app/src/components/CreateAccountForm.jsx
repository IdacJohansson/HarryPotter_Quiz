import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateAccountForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleNavigateToHome = () => {
    navigate("/");
  };

  function saveToLocalStorage(event) {
    event.preventDefault();

    let isValid = true;
    const errorMsg = { username: "", password: "" };
    const emptyField = "";
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (username.length < 2 || username.length > 50 || emptyField) {
      errorMsg.username = "Username must be 2-50 characters.";
      isValid = false;
    }
    if (!passwordPattern.test(password)) {
      errorMsg.password =
        "Password must contain 8 characters: one number, special character, uppercase, lowercase.";
      isValid = false;
    }
    setErrors(errorMsg);

    if (!isValid) {
      return;
    } else {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      console.log("Saved to localStorage:", { username, password });
      window.location.href = "/login";
    }
  }
  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={saveToLocalStorage}>
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
        <button type="submit">Create Account</button>
      </form>

      <button onClick={handleNavigateToHome}>Go back</button>
    </div>
  );
}

export default CreateAccountForm;
