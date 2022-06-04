import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Calendar from "./components/calendar";
import Information from "./components/information";
import TeamChat from "./components/teamChat";
import TeamNotice from "./components/teamNotice";
import TeamPhoto from "./components/teamPhoto";

import "./TeamDetail.scss";

const tabList: { name: string; link: string }[] = [
  { name: "정보", link: "information" },
  { name: "게시판", link: "notice" },
  { name: "채팅", link: "chat" },
  { name: "캘린더", link: "calendar" },
  { name: "사진첩", link: "photo" },
];

const TeamDetail = () => {
  const navigate = useNavigate();
  const { id, tab } = useParams();
  const name = "이름 입니다.";

  console.log(id, tab);

  return (
    <div className="team-detail">
      <div className="team-detail__name">{name}</div>
      <div className="team-detail__tab-list">
        {tabList.map((item) => (
          <span
            className={`team-detail__tab-list__item${
              tab === item.link ? " active" : ""
            }`}
            key={item.name}
            onClick={() => {
              navigate(`/team/${id}/${item.link}`);
            }}
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="team-detail__tab-container">
        {tab === "information" && <Information />}
        {tab === "notice" && <TeamNotice />}
        {tab === "chat" && <TeamChat />}
        {tab === "calendar" && <Calendar />}
        {tab === "photo" && <TeamPhoto />}
      </div>
    </div>
  );
};

export default TeamDetail;
