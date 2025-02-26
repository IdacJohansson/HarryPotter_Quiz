import React from "react";
import alrauneImg from "../assets/alraune.png";

function ModalPopUp({ isOpen, onClose, message }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-container">
      <div className="modal-content">
        <img className="modal-img" src={alrauneImg} alt="" />
        <p className="modal-msg">{message}</p>
        <button className="modal-btn" onClick={onClose}>
          Ok
        </button>
      </div>
    </div>
  );
}
export default ModalPopUp;
