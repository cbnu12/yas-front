import React from "react";
import SearchInput from "./components/SearchInput";
import MainView from "./Main.view";
import { MainListData, tagList } from "./data/data";
import SortInput from "./components/SortInput";

const Main = () => {
  return (
    <div>
      <SearchInput tagList={tagList} />
      <SortInput />
      <MainView list={MainListData} />
    </div>
  );
};

export default Main;
