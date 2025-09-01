import { useNavigate } from "react-router-dom";

const GoBackArrow = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="go-back-btn">
      <a href="/#" onClick={handleNavigate}>
        <i className="go-back-icon bi bi-arrow-left"></i>
      </a>
    </div>
  );
};

export default GoBackArrow;
