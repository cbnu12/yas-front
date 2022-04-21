import { useNavigate } from "react-router-dom";
import { useState, MouseEvent } from "react";
import { Button, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import SearchInput from "./components/SearchInput";
import MainView from "./Main.view";
import { MainListData, tagList } from "./data/data";
import SortInput from "./components/SortInput";

import "./Main.scss";

const { Sider, Content } = Layout;

const Main = () => {
  const navigate = useNavigate();
  const [showSider, setShowSider] = useState<boolean>(false);

  return (
    <>
      <Layout>
        {showSider && (
          <>
            <div
              className="main__sider__box"
              onClick={() => setShowSider(false)}
            />
            <Sider className="main__sider" width="300">
              <Button
                className="main__sider__button"
                shape="round"
                onClick={() => {
                  navigate("/signIn");
                }}
              >
                로그인 하기
              </Button>
            </Sider>
          </>
        )}
        <Content>
          <div className="main">
            <MenuOutlined
              className="main__menu"
              onClick={() => setShowSider(!showSider)}
            />
            <SearchInput tagList={tagList} />
            <SortInput />
            <MainView list={MainListData} />
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default Main;
