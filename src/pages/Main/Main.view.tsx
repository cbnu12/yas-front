import React from "react";
import MainItem from "./components/MainItem";
import { MainListType } from "./data/data";

interface Props {
  list: MainListType;
}

const MainView = ({ list }: Props) => {
  const { totalCount, currentPage, teamList } = list;

  return (
    <div>
      {teamList.map((item) => (
        <MainItem key={item.id} item={item} />
      ))}
      <div>
        {currentPage} / {totalCount}
      </div>
    </div>
  );
};

export default MainView;
