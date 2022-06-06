import React from "react";
import { useLocation, useParams } from "react-router-dom";
import TeamNoticeDetail from "./TeamNoticeDetail";
import TeamNoticeList from "./TeamNoticeList";

const TeamNotice = () => {
  const { id } = useParams();
  const { hash } = useLocation();

  return (
    <div>
      {hash ? (
        <TeamNoticeDetail noticeId={hash.replace("#", "")} />
      ) : (
        id && <TeamNoticeList teamId={id} />
      )}
    </div>
  );
};

export default TeamNotice;
