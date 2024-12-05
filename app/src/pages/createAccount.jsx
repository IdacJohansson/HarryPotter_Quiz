import React from "react";

import CreateAccountForm from "../components/CreateAccountForm";
import PaperBox from "../components/PaperBox";
import HogwartsLogo from "../assets/hogwarts.png";

export default function createAccount() {
  return (
    <>
      <main>
        <div className="container">
          <PaperBox>
            <div className="form-container">
              <CreateAccountForm />
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
