import React from "react";

import PaperBox from "../components/PaperBox";
import LoginForm from "../components/LoginForm";

export default function login() {
  return (
    <>
      <main>
        <div className="home-container">
          <PaperBox>
            <div className="btn-container">
              <LoginForm />
            </div>
          </PaperBox>
        </div>
      </main>
    </>
  );
}
