import React from "react";

import "./BottomButton.scss";

interface Props {
  text: string;
  onClick: () => void;
  className?: string;
}

const BottomButton = ({ text, onClick, className }: Props) => {
  return (
    <button className={`bottom-button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default BottomButton;
