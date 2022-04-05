import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Select, Input, Tag, Typography } from "antd";
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
          <HashTag key={item} color="default" hashtag={item} />
        ))}
      </div>

      {/* <div>
        {tagList.map((item) => (
          <HashTag hashtag={item} color="default"/>
          <Tag key={item} color="default" icon={<CloseOutlined />}>
            <Typography.Text strong>{item}</Typography.Text>
          </Tag>
        ))}
      </div> */}
    </div>
  );
};

export default SearchInput;
