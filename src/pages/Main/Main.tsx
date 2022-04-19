import React from "react";
import SearchInput from "./components/SearchInput";
import MainView from "./Main.view";
import { MainListData, tagList } from "./data/data";
import SortInput from "./components/SortInput";

import "./Main.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <Button
        onClick={() => {
          navigate("/signIn");
        }}
      >
        로그인 하기
      </Button>
      <SearchInput tagList={tagList} />
      <SortInput />
      <MainView list={MainListData} />
    </div>
  );
};

export default Main;
