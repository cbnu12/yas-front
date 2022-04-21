import { SearchOutlined } from "@ant-design/icons";
import HashTag from "../../../../common/HashTag";
import Select from "../../../../common/Select";

import "./SearchInput.scss";

interface Props {
  tagList: string[];
}

const SearchInput = ({ tagList }: Props) => {
  return (
    <div className="main__search-input">
      <div className="main__search-input__input-container">
        <Select
          defaultValue="그룹명"
          options={[
            { value: "groupName", name: "그룹명" },
            { value: "hashTag", name: "해시태그" },
          ]}
        />
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
