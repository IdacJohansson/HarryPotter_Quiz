import React from "react";
import { useNavigate } from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <button className="login-btn" onClick={handleLogin}>
        {" "}
        Login
      </button>
    </div>
  );
}

export default LoginButton;
