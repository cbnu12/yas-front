import "./ListItem.scss";

interface Props {
  writer: string;
  date: string;
  content: string;
}

const CommentListItem = ({ writer, date, content }: Props) => {
  return (
    <div className="comment-list-item">
      <div className="comment-list-item__sub">
        <div className="comment-list-item__sub__writer">{writer}</div>
        <div className="comment-list-item__sub__date">{date}</div>
      </div>
      <div className="comment-list-item__main">{content}</div>
    </div>
  );
};

export default CommentListItem;
