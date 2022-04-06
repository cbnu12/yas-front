import React from "react";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import "./ErrorBar.scss";

interface Props {
  message: string;
  icon: string;
  className?: string;
}

const ErrorBar = ({ message, icon, className }: Props) => {
  return (
    <div
      className={
        message
          ? `error-box ${className} ${icon}`
          : `hidden error-box ${className} ${icon}`
      }
    >
      <div className="icon">
        {icon === "warning" && <ExclamationCircleOutlined />}
        {icon === "success" && <CheckCircleOutlined />}
      </div>
      {message}
    </div>
  );
};

export default ErrorBar;
