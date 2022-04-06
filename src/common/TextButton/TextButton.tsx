import "./TextButton.scss";

interface Props {
  text: string;
  onClick: () => void;
  className?: string;
}

const TextButton = ({ text, onClick, className }: Props) => {
  return (
    <button className={`text-button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default TextButton;
