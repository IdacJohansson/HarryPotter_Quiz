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
          <PaperBox >
            <div className="typing-text">
              <p>Welcome to the Harry Potter Quiz!</p>
              <p>Now is the time to put you character-</p>
              <p>skills to the test.. Imperio!</p>
            </div>
            <StartButton />
          </PaperBox>
        </div>
      </main>
    </>
  );
}
