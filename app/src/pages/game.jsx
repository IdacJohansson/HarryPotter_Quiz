import React from "react";
import Box from "../components/Box";
import StartButton from "../components/StartButton";
import Navigation from "../components/Navigation";

export default function Game() {
  return (
    <>
      <Navigation />
      <main>
        <Box title={"Put Your Skills to the Test"}>
          <StartButton />
        </Box>
      </main>
    </>
  );
}
