import React from "react";
import { useNavigate } from "react-router-dom";
import List from "../../../../../common/Board/List";
import Search from "../../../../../common/Search";

interface Props {
  teamId: string;
}

const TeamNoticeList = ({ teamId }: Props) => {
  const navigate = useNavigate();
  const labelList: string[] = ["번호", "제목", "작성자", "작성일"];
  const list = [
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
    <>
      <div>
        <Search />
        <List
          labelList={labelList}
          list={list}
          onClickItem={(noticeId) => {
            navigate(`/team/${teamId}/notice#${noticeId}`);
          }}
        />
      </div>
    </>
  );
};

export default TeamNoticeList;
