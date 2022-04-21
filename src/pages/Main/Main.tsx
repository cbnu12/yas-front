import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import MainList from "./components/MainList";

import "./Main.scss";

const { Sider, Content } = Layout;

const Main = () => {
  const navigate = useNavigate();
  const [showSider, setShowSider] = useState<boolean>(false);

  return (
    <>
      {showSider && (
        <>
          <div
            className="main__sider__background"
            onClick={() => setShowSider(false)}
          />
          <div className="main__sider__box">
            <Button
              size="large"
              className="main__sider__button"
              shape="round"
              onClick={() => {
                navigate("/signIn");
              }}
            >
              로그인 하기
            </Button>
          </div>
        </>
      )}
      <MenuOutlined
        className="main__menu"
        onClick={() => setShowSider(!showSider)}
      />
      <MainList />
    </>
  );
};

export default Main;
