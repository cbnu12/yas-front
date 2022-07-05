import CommentListItem from "../ListItem";

import "./List.scss";

export interface Props {
  list: {
    id: number;
    writer: string;
    date: string;
    content: string;
  }[];
}

const CommentList = ({ list }: Props) => {
  return (
    <div className="comment-list">
      {list.map((item) => (
        <CommentListItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CommentList;
