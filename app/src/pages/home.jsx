import React from "react";

import PaperBox from "../components/PaperBox";
import CreateAccountButton from "../components/CreateAccountButton";
import LoginButton from "../components/LoginButton";

function home() {
  return (
    <div className="container">
      <PaperBox>
        <div className="btn-container">
          <LoginButton />
          <CreateAccountButton />
        </div>
      </PaperBox>
    </div>
  );
}

export default home;
