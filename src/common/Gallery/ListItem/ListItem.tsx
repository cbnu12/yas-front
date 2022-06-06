import { CommentOutlined, HeartOutlined } from "@ant-design/icons";

import "./ListItem.scss";

export interface Props {
  index: string;
  src: string;
  likeCount?: number;
  commentCount?: number;
}

const GalleryListItem = ({ index, src, likeCount, commentCount }: Props) => (
  <div className="gallery-list-item">
    <img className="gallery-list-item__image" src={src} alt="이미지" />

    {(likeCount || commentCount) && (
      <div className="gallery-list-item__description">
        {likeCount && (
          <span>
            <HeartOutlined />
            {likeCount}
          </span>
        )}
        {commentCount && (
          <span>
            <CommentOutlined />
            {commentCount}
          </span>
        )}
      </div>
    )}
  </div>
);

export default GalleryListItem;
