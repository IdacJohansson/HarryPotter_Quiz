import React from "react";
import { useNavigate } from "react-router-dom";

function CreateAccountButton() {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/createAccount");
  };
  return (
    <div>
      <button className="login-btn" onClick={handleCreateAccount}>
        {" "}
        Create Account
      </button>
    </div>
  );
}

export default CreateAccountButton;
