import PaperBox from "../components/PaperBox";
import LoginForm from "../components/LoginForm";

import HogwartsLogo from "../assets/hogwarts.png";

export default function login() {
  return (
    <>
      <main>
        <div className="container">
          <PaperBox variant="login">
            <div className="form-container">
              <LoginForm />
              <img
                className="hogwarts-logo"
                src={HogwartsLogo}
                alt="hogwarts-logo"
              />
            </div>
          </PaperBox>
        </div>
      </main>
    </>
  );
}
