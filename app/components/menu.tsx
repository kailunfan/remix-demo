import { NavLink } from "@remix-run/react";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

export default function ProjectMenu() {
  return (
    <div>
      <div className="demo-logo" />
      <div>
        <NavLink className="menu" to="/">
          <AppstoreOutlined />
          Home
        </NavLink>
        <NavLink className="menu" to="/contacts">
          <SettingOutlined />
          Contacts
        </NavLink>
        <NavLink className="menu" to="/antd">
          <SettingOutlined />
          Antd
        </NavLink>
        <NavLink className="menu" to="/todo">
          <SettingOutlined />
          ToDo
        </NavLink>
      </div>
    </div>
  );
}
