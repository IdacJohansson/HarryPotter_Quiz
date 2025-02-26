import React from "react";

import PaperBox from "../components/PaperBox";
import CreateAccountButton from "../components/CreateAccountButton";
import LoginButton from "../components/LoginButton";

import SnitchImage from "../assets/golden-snitch.png";


function home() {
  return (
    <div className="container">
      <PaperBox>
        <div className="btn-container">
          <LoginButton />
          <div className="snitch-text-container">
          <img src={SnitchImage} alt="" className="snitch-img" /> <p className="letter-R">R</p>
          </div>
          <CreateAccountButton />
        </div>
      </PaperBox>
    </div>
  );
}

export default home;
