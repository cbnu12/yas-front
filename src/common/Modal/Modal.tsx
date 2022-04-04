import React, { ReactNode } from "react";

import "./Modal.scss";

interface Props {
  children: ReactNode;
  buttonText: string;
  onClick: () => void;
  errorMessage: string;
}

const Modal = ({ children, buttonText, onClick, errorMessage }: Props) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="error-box">{errorMessage}</div>
        {children}
        <button onClick={onClick}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Modal;
