import { AppstoreOutlined } from "@ant-design/icons";

import { NavLink, Outlet } from "@remix-run/react";
import { Layout, Menu, theme } from "antd";
import React from "react";

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = ["table", "form", "list", "tree", "collapse"];

  const menu = items.map((x) => {
    return (
      <NavLink className="menu" key={x} to={x} style={{ display: "block" }}>
        <AppstoreOutlined />
        {x.toUpperCase()}
      </NavLink>
    );
  });

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 65,
          bottom: 0,
          background: "#F5F5F5",
        }}
      >
        <div className="demo-logo-vertical" />
        {menu}
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
