import "./UnderlineInput.scss";

interface Props {
  placeholder: string;
  type?: string;
  className?: string;
}

const UnderlineInput = ({ placeholder, type, className }: Props) => {
  return (
    <input
      className={`underline-input ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default UnderlineInput;
