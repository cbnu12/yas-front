import React, { ReactNode } from "react";

import "./Modal.scss";

interface Props {
  children: ReactNode;
  className?: string;
}

const Modal = ({ children, className }: Props) => {
  return (
    <div className="modal-background">
      <div className={`modal-container ${className}`}>{children}</div>
    </div>
  );
};

export default Modal;
