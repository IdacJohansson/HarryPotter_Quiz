import { useNavigate } from "react-router-dom";

function StartButton() {
  const navigate = useNavigate();

  const navigateToQuiz = () => {
    navigate("/quiz");
  };
  return (
    <div>
      <button className="start-btn" onClick={navigateToQuiz}>
        Start Quiz
      </button>
    </div>
  );
}

export default StartButton;
