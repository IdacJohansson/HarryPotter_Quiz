import React from "react";
import StartButton from "../components/StartButton";
import Navigation from "../components/Navigation";
import PaperBox from "../components/PaperBox";

export default function Game() {
  return (
    <>
      <Navigation />
      <main>
        <div className="game-container">
          <PaperBox title={"Time To Put Your Character Skills to the Test"}>
            <StartButton />
          </PaperBox>
        </div>
      </main>
    </>
  );
}
