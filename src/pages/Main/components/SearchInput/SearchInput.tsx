import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Select, Input, Tag, Typography } from "antd";

interface Props {
  tagList: string[];
}

const SearchInput = ({ tagList }: Props) => {
  const { Option } = Select;

  return (
    <>
      <Select defaultValue={"그룹명"}>
        <Option>그룹명</Option>
        <Option>해시태그</Option>
      </Select>
      <Input
        placeholder="그룹명, 해시태그 검색"
        size="large"
        prefix={<SearchOutlined />}
      />
      <div>
        {tagList.map((item) => (
          <Tag key={item} color="default">
            <Typography.Text strong>#{item}</Typography.Text>
          </Tag>
        ))}
      </div>

      <div>
        {tagList.map((item) => (
          <Tag key={item} color="default" icon={<CloseOutlined />}>
            <Typography.Text strong>{item}</Typography.Text>
          </Tag>
        ))}
      </div>
    </>
  );
};

export default SearchInput;
