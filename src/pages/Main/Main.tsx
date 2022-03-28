import React from "react";
import SearchInput from "./components/SearchInput";
import MainView from "./Main.view";
import { MainListData } from "./data/data";

const Main = () => {
  return (
    <>
      <SearchInput />
      <MainView list={MainListData} />
    </>
  );
};

export default Main;
