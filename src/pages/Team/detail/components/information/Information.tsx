import React from "react";
import { useParams } from "react-router-dom";

import "./Information.scss";

const Information = () => {
  const { id } = useParams();

  return <div className="team-information">정보</div>;
};

export default Information;
