import React from "react";
import { useState } from "react";

function CreateAccountForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

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
      <div className="heading-container">
        <h1 className="form-heading">Create Account</h1>
      </div>
      <form onSubmit={saveToLocalStorage}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <span style={{ color: "black" }}>{errors.username}</span>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <span style={{ color: "black" }}>{errors.password}</span>
        <br />

        <button className="submit-btn" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccountForm;
