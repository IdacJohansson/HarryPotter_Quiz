import { Link } from "react-router-dom";

function CreateAccountButton() {
  return (
    <div>
      <Link className="login-btn" to={"/createAccount"}>
        Create Account
      </Link>
    </div>
  );
}

export default CreateAccountButton;
