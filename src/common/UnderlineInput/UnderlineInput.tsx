import classNames from "classnames";
import { ChangeEvent } from "react";
import "./UnderlineInput.scss";

interface Props {
  placeholder: string;
  type?: string;
  className?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const UnderlineInput = ({
  placeholder,
  type,
  className,
  value,
  onChange,
  name,
}: Props) => {
  return (
    <input
      aria-label={name}
      className={classNames("underline-input", className)}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default UnderlineInput;
