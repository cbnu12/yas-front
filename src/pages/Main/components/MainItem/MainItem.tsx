import React from "react";
import { TeamItemType } from "../../data/data";

interface Props {
  item: TeamItemType;
}

const MainItem = ({ item }: Props) => {
  const { name, currentMember, totalMember, hashtagList } = item;
  return (
    <div>
      <div>{name}</div>
      <div>
        {currentMember}/{totalMember}
      </div>
      {hashtagList.map((item) => (
        <div key={item.color}>
          {item.hashtag} : {item.color}
        </div>
      ))}
    </div>
  );
};

export default MainItem;
