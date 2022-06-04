import ListItem from "../ListItem";

export interface Props {
  list: {
    index: number;
    title: string;
    writer: string;
    createdDate: string;
    commentCount: number;
  }[];
}

const List = ({ list }: Props) => {
  return (
    <div className="">
      <div className=""></div>
      {list.map((item) => (
        <ListItem
          key={item.index}
          index={item.index}
          title={item.title}
          writer={item.writer}
          createdDate={item.createdDate}
          commentCount={item.commentCount}
        />
      ))}
    </div>
  );
};

export default List;
