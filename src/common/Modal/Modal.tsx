import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import React, { ReactNode } from "react";

import "./Modal.scss";

interface Props {
  children: ReactNode;
  buttonText: string;
  onClick: () => void;
  errorIcon?: "warning" | "success";
  errorMessage: string;
}

const Modal = ({
  children,
  buttonText,
  onClick,
  errorIcon,
  errorMessage,
}: Props) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className={errorMessage ? "error-box" : "hidden error-box"}>
          <div className="icon">
            {errorIcon === "warning" && <ExclamationCircleOutlined />}
            {errorIcon === "success" && <CheckCircleOutlined />}
          </div>
          {errorMessage}
        </div>
        {children}
        <button className="modal-container__submit" onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Modal;
