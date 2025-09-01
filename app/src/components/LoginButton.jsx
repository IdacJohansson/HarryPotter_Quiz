import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <div>
      <Link className="login-btn" to={"/login"}>
        Login
      </Link>
    </div>
  );
}

export default LoginButton;
