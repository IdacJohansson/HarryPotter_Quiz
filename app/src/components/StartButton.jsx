import { Link } from "react-router-dom";

function StartButton() {
  return (
    <div>
      <Link className="start-btn" to={"/quiz"}>
        Start Quiz
      </Link>
    </div>
  );
}

export default StartButton;
