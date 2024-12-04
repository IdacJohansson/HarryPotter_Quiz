import React from "react";
import Box from "../components/Box";
import Navigation from "../components/Navigation";

function quiz() {
  return (
    <>
    <Navigation />
    <main>
      <div>
        <Box title="Question 1" />
        {/* Quiz questions - fetch from the url/api with Axios */}
      </div>
    </main>
    </>
  );
}

export default quiz;
