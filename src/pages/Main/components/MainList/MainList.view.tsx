import { Space } from "antd";
import MainItem from "../MainItem";
import { MainListType } from "../../data/data";

interface Props {
  list: MainListType;
}

const MainView = ({ list }: Props) => {
  const { totalCount, currentPage, teamList } = list;

  return (
    <Space
      wrap
      align="center"
      style={{
        marginTop: "20px",
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
      {teamList.map((item) => (
        <MainItem key={item.id} item={item} />
      ))}
    </Space>
  );
};

export default MainView;
