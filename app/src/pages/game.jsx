import React from "react";

import Navigation from "../components/Navigation";
import StartButton from "../components/StartButton";
import PaperBox from "../components/PaperBox";

export default function Game() {
  return (
    <>
      <main>
        <Navigation />
        <div className="game-container">
          <PaperBox title={"Time To Put Your Character Skills to the Test..."}>
            <StartButton />
          </PaperBox>
        </div>
      </main>
    </>
  );
}
