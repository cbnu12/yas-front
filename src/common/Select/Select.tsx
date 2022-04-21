import { CaretDownOutlined } from "@ant-design/icons";
import { MouseEvent, useState } from "react";

import "./Select.scss";

export interface Props {
  defaultValue: string;
  options: { value: string; name: string }[];
  onChange?: (value: string) => void;
  className?: string;
}

const Select = ({ defaultValue, onChange, options, className }: Props) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const onChangeValue = (e: MouseEvent<HTMLElement>) => {
    const { id } = e.target as HTMLDivElement;

    setSelectedValue(id);
    onChange?.(id);

    setShowOptions(false);
  };

  return (
    <div className={`select-box ${className}`}>
      <div
        className="select-box__select"
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      >
        {selectedValue}
        <CaretDownOutlined className="select-box__select__icon" />
      </div>
      {showOptions && (
        <div className="select-box__options">
          {options.map((option) => (
            <div
              key={option.value}
              className="select-box__options__option"
              id={option.value}
              onClick={onChangeValue}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
