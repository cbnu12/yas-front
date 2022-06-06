import ListItem from "../ListItem";

import "./List.scss";

export interface ListProps {
  labelList: string[];
  list: {
    index: number;
    title: string;
    writer: string;
    createdDate: string;
    commentCount?: number;
  }[];
}

const List = ({ labelList, list }: ListProps) => {
  return (
    <div className="list">
      <div className="list__label">
        {labelList.map((label) => (
          <span className="list__label__item">{label}</span>
        ))}
      </div>
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
