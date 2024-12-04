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
        Log in
      </button>
    </div>
  );
}

export default LoginButton;
