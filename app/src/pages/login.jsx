import React from "react";

import PaperBox from "../components/PaperBox";
import LoginForm from "../components/LoginForm";
import HogwartsLogo from "../assets/hogwarts.png";

import { useNavigate } from "react-router-dom";

export default function login() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <main>
        <div className="container">
          <PaperBox>
            <div className="form-container">
            <div className="go-back-btn">
              <a href="#" onClick={handleNavigate}><i className="go-back-icon bi bi-arrow-left" ></i></a>
            </div>
              <LoginForm />
              <img
                src={HogwartsLogo}
                alt="hogwarts-logo"
                style={{
                  width: "200px",
                  height: "200px",
                  opacity: 0.8,
                  objectFit: "cover",
                }}
              />
            </div>
          </PaperBox>
        </div>
      </main>
    </>
  );
}
