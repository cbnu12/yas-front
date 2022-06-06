import Detail from "../../../../../common/Board/Detail";
import CommentList from "../../../../../common/Comment/List";

interface Props {
  noticeId: string;
}

const TeamNoticeDetail = ({ noticeId }: Props) => {
  const title = "제목입니다.";
  const content =
    "내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.";
  const name = "작성자";
  const date = "2022.01.01 23:99";
  const commentList = [
    {
      id: 1,
      writer: "작성자",
      date: "2022.12.20 23:59",
      content: "댓글 내용 입니다.",
    },
    {
      id: 2,
      writer: "작성자",
      date: "2022.12.20 23:59",
      content:
        "댓글 내용 입니다. 댓글 내용 입니다. 댓글 내용 입니다. 댓글 내용 입니다.",
    },
    {
      id: 3,
      writer: "작성자",
      date: "2022.12.20 23:59",
      content:
        "댓글 내용 입니다. 댓글 내용 입니다. 댓글 내용 입니다. 댓글 내용 입니다.",
    },
    {
      id: 4,
      writer: "작성자",
      date: "2022.12.20 23:59",
      content:
        "댓글 내용 입니다. 댓글 내용 입니다. 댓글 내용 입니다. 댓글 내용 입니다.",
    },
  ];

  return (
    <>
      <Detail title={title} content={content} name={name} date={date} />
      <CommentList list={commentList} />
    </>
  );
};

export default TeamNoticeDetail;
