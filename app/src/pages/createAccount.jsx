import React from "react";

import CreateAccountForm from "../components/CreateAccountForm";
import PaperBox from "../components/PaperBox";

export default function createAccount() {
  return (
    <>
    <main>
      <div className="home-container">
        <PaperBox>
          <div className="btn-container">
            <CreateAccountForm />
          </div>
        </PaperBox>
      </div>
    </main>
  </>
  );
}
