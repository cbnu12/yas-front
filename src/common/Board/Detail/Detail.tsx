import React from "react";

import "./Detail.scss";

interface Props {
  title: string;
  content: string;
  name: string;
  date: string;
}

const Detail = ({ title, content, name, date }: Props) => {
  return (
    <div className="board-detail">
      <div className="board-detail__title">{title}</div>
      <div className="board-detail__content">
        <div className="board-detail__content__description">
          {date} {name}
        </div>
        {content}
      </div>
    </div>
  );
};

export default Detail;
