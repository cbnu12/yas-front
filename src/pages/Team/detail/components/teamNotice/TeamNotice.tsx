import React from "react";
import List from "../../../../../common/Board/List";
import { ListItemProps } from "../../../../../common/Board/ListItem/ListItem";
import Search from "../../../../../common/Search";

const TeamNotice = () => {
  const labelList: string[] = ["번호", "제목", "작성자", "작성일"];
  const list: ListItemProps[] = [
    {
      index: 1,
      title: "제목",
      writer: "작성자",
      createdDate: "2022.12.20",
      commentCount: 10,
    },
    {
      index: 2,
      title: "제목",
      writer: "작성자",
      createdDate: "2022.12.20",
    },
    {
      index: 3,
      title: "제목",
      writer: "작성자",
      createdDate: "2022.12.20",
      commentCount: 10,
    },
  ];

  return (
    <div>
      <Search />
      <List labelList={labelList} list={list} />
    </div>
  );
};

export default TeamNotice;
