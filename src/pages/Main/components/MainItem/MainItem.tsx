import { UserOutlined } from "@ant-design/icons";
import { Tag, Typography } from "antd";
import React from "react";
import { TeamItemType } from "../../data/data";

import "./MainItem.scss";

interface Props {
  item: TeamItemType;
}

const MainItem = ({ item }: Props) => {
  const { name, currentMember, totalMember, hashtagList } = item;
  return (
    <div className="main__team-item">
      <div className="main__team-item__number">
        <UserOutlined />
        {currentMember}/{totalMember}
      </div>
      <div className="main__team-item__title">{name}</div>
      <div className="main__team-item__hashtag">
        {hashtagList.map((item) => (
          <Tag key={item.color} color={`#${item.color}`}>
            {/* <div className="main__team-item__hashtag__item"> */}
            <Typography.Text strong>#{item.hashtag}</Typography.Text>
            {/* </div> */}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default MainItem;
