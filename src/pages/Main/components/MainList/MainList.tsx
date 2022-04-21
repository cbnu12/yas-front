import Select from "../../../../common/Select";
import { MainListData, tagList } from "../../data/data";
import SearchInput from "../SearchInput";
import MainView from "./MainList.view";

import "./MainList.scss";

const MainList = () => {
  return (
    <div className="main-list">
      <SearchInput tagList={tagList} />
      <Select
        className="main-list__sort-button"
        defaultValue="최근 생성 순"
        options={[{ value: "recent", name: "최근 생성 순" }]}
      />
      <MainView list={MainListData} />
    </div>
  );
};

export default MainList;
