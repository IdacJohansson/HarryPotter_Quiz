import CreateAccountForm from "../components/CreateAccountForm";
import PaperBox from "../components/PaperBox";
import HogwartsLogo from "../assets/hogwarts.png";

export default function createAccount() {
  return (
    <>
      <main>
        <div className="container">
          <PaperBox variant="createAccaount">
            <div className="form-container">
              <CreateAccountForm />
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
