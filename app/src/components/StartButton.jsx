import { Link } from "react-router-dom";

function StartButton() {
  return (
    <div>
      <Link className="start-btn" to={"/quiz"}>
      Start Quiz<i className="lightning-icon bi bi-lightning-fill"></i>
      </Link>
    </div>
  );
}

export default StartButton;
