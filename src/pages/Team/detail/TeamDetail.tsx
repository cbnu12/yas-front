import React, { useState } from "react";
import Calendar from "./components/calendar";
import Information from "./components/information";
import TeamChat from "./components/teamChat";
import TeamNotice from "./components/teamNotice";
import TeamPhoto from "./components/teamPhoto";

type TabType = "INFORMATION" | "NOTICE" | "CHAT" | "CALENDAR" | "PHOTO";

const TeamDetail = () => {
  const [tab, setTab] = useState<TabType>("INFORMATION");

  return (
    <>
      {tab === "INFORMATION" && <Information />}
      {tab === "NOTICE" && <TeamNotice />}
      {tab === "CHAT" && <TeamChat />}
      {tab === "CALENDAR" && <Calendar />}
      {tab === "PHOTO" && <TeamPhoto />}
    </>
  );
};

export default TeamDetail;
