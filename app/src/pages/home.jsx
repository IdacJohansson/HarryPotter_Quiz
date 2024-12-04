import React from "react";

import PaperBox from "../components/PaperBox";
import CreateAccountButton from "../components/CreateAccountButton";

function home() {
  return (
    <div className="home-container">
      <PaperBox>
        <div className="btn-container">
          <CreateAccountButton />
        </div>
      </PaperBox>
    </div>
  );
}

export default home;
