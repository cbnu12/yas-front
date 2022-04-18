import { SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";
import HashTag from "../../../../common/HashTag";

import "./SearchInput.scss";

interface Props {
  tagList: string[];
}

const SearchInput = ({ tagList }: Props) => {
  const { Option } = Select;

  return (
    <div className="main__search-input">
      <div className="main__search-input__input-container">
        <Select defaultValue={"그룹명"}>
          <Option>그룹명</Option>
          <Option>해시태그</Option>
        </Select>
        <div className="main__search-input__input-container__box">
          <SearchOutlined className="search-icon" />
          <input placeholder="그룹명, 해시태그 검색" />
        </div>
      </div>
      <div className="main__search-input__tag-container">
        {tagList.map((item) => (
          <HashTag key={item} color="BFBFBF" hashtag={item} />
        ))}
      </div>

      <div>
        {tagList.map((item) => (
          <HashTag
            hashtag={item}
            color="BFBFBF"
            icon="delete"
            onClickIcon={() => {
              alert("delete");
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchInput;
