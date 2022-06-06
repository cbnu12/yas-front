import GalleryListItem from "../ListItem";

import "./List.scss";

export interface Props {
  list: {
    index: string;
    src: string;
    likeCount?: number;
    commentCount?: number;
  }[];
}

const GalleryList = ({ list }: Props) => {
  return (
    <div className="gallery-list">
      {list.map((item) => (
        <GalleryListItem {...item} />
      ))}
    </div>
  );
};

export default GalleryList;
