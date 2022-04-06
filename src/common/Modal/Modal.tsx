import React, { ReactNode } from "react";

import "./Modal.scss";

interface Props {
  children: ReactNode;
  buttonText: string;
  onClick: () => void;
}

const Modal = ({ children, buttonText, onClick }: Props) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        {children}
        <button className="modal-container__submit" onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Modal;
