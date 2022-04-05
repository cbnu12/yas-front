import React from "react";
import { Tag, Typography } from "antd";

import "./HashTag.scss";

interface Props {
  hashtag: string;
  color: string;
}

const HashTag = ({ hashtag, color }: Props) => {
  return (
    <Tag key={hashtag} color={`#${color}`} className="custom">
      <Typography.Text strong>#{hashtag}</Typography.Text>
    </Tag>
  );
};

export default HashTag;
