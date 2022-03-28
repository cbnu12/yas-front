import { UserOutlined } from "@ant-design/icons";
import { Card, Tag, Typography } from "antd";
import React from "react";
import { TeamItemType } from "../../data/data";

interface Props {
  item: TeamItemType;
}

const MainItem = ({ item }: Props) => {
  const { name, currentMember, totalMember, hashtagList } = item;
  return (
    <Card>
      <Typography.Title level={5}>
        <UserOutlined />
        {currentMember}/{totalMember}
      </Typography.Title>
      <Typography.Title level={4}>{name}</Typography.Title>
      <div>
        {hashtagList.map((item) => (
          <Tag key={item.color} color={`#${item.color}`}>
            <Typography.Text strong>#{item.hashtag}</Typography.Text>
          </Tag>
        ))}
      </div>
    </Card>
  );
};

export default MainItem;
