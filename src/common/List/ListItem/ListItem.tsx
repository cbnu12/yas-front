import { CommentOutlined } from "@ant-design/icons";
import React from "react";

import "./ListItem.scss";

interface Props {
  index: number;
  title: string;
  writer: string;
  createdDate: string;
  commentCount?: number;
}

const ListItem = ({
  index,
  title,
  writer,
  createdDate,
  commentCount,
}: Props) => {
  return (
    <div className="list-item">
      <span className="list-item__index">{index}</span>
      <span className="list-item__title">{title}</span>
      <span className="list-item__writer">{writer}</span>
      <span className="list-item__created-date">{createdDate}</span>
      {commentCount && (
        <span className="list-item__comment-count">
          <CommentOutlined />
          <span>{commentCount}</span>
        </span>
      )}
    </div>
  );
};

export default ListItem;
