import React from "react";
import { Tag, Typography } from "antd";

import "./HashTag.scss";
import { CloseCircleOutlined } from "@ant-design/icons";

export interface Props {
  hashtag: string;
  color: string;
  icon?: string;
  onClickIcon?: () => void;
}

const HashTag = ({ hashtag, color, icon, onClickIcon }: Props) => {
  return (
    <Tag key={hashtag} color={`#${color}`} className="custom">
      <Typography.Text strong>
        #{hashtag}
        {icon === "delete" && <CloseCircleOutlined onClick={onClickIcon} />}
      </Typography.Text>
    </Tag>
  );
};

export default HashTag;
