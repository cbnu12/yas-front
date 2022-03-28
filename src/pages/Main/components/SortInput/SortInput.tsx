import { AlignLeftOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      <AlignLeftOutlined />
      최근 생성 순
    </Menu.Item>
  </Menu>
);

const SortInput = () => {
  return (
    <Dropdown overlay={menu} placement="bottom">
      <Button>
        <AlignLeftOutlined />
        최근 생성 순
      </Button>
    </Dropdown>
  );
};

export default SortInput;
