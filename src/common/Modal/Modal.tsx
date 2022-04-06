import React, { ReactNode } from "react";

import "./Modal.scss";

interface Props {
  children: ReactNode;
}

const Modal = ({ children }: Props) => {
  return (
    <div className="modal-background">
      <div className="modal-container">{children}</div>
    </div>
  );
};

export default Modal;
