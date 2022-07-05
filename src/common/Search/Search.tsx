import { SearchOutlined } from "@ant-design/icons";

import "./Search.scss";

export interface Props {
  value?: string;
  placeholder?: string;
  onChange?: (nextValue: string) => void;
  type?: string;
  className?: string;
}

const Search = ({ value, placeholder, onChange, type, className }: Props) => {
  return (
    <div className={`search ${className}`}>
      <SearchOutlined />
      <input
        className="search__input"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange?.(e.target.value);
        }}
        type={type}
      />
    </div>
  );
};

export default Search;
