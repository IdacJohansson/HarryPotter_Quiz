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
                <a href="#" onClick={handleNavigate}>
                  <i className="go-back-icon bi bi-arrow-left"></i>
                </a>
              </div>
              <LoginForm />
              <img
                className="hogwarts-logo"
                src={HogwartsLogo}
                alt="hogwarts-logo"
              />
            </div>
          </PaperBox>
        </div>
      </main>
    </>
  );
}
