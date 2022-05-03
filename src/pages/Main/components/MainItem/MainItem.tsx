import { UserOutlined } from "@ant-design/icons";
import HashTag from "../../../../common/HashTag";
import { TeamItemType } from "../../data/data";

import "./MainItem.scss";

interface Props {
  item: TeamItemType;
}

const MainItem = ({ item }: Props) => {
  const { name, currentMember, totalMember, hashtagList } = item;
  return (
    <div className="main-item">
      <div className="main-item__number">
        <UserOutlined />
        {currentMember}/{totalMember}
      </div>
      <div className="main-item__title">{name}</div>
      <div className="main-item__hashtag">
        {hashtagList.map((item) => (
          <HashTag hashtag={item.hashtag} color={item.color} />
        ))}
      </div>
    </div>
  );
};

export default MainItem;
