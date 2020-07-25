import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;

const Siders = () => {
  const { pathname } = useLocation();
  const match = pathname.split('/').filter((x) => x);
  const [open, selected] = match.map((value, index) => `/${match.slice(0, index + 1).join('/')}`);
  const [openKeys = [open]] = useState();
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapse) => {
    console.log(collapse);
    setCollapsed(collapse);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <div className="logo" />
      <Menu theme="dark"
        mode="inline"
        selectedKeys={[open, selected]}
        defaultOpenKeys={openKeys}
      >
        <Menu.Item key="/gourmet" icon={<PieChartOutlined />}>
          <NavLink to="/gourmet"> 美食</NavLink>
        </Menu.Item>
        <Menu.Item key="/drinkAdesert" icon={<DesktopOutlined />}>
          <NavLink to="/drinkAdesert"> 饮品和甜品</NavLink>
        </Menu.Item>
        <SubMenu key="/scale" icon={<UserOutlined />} title="餐桌规模">
          <Menu.Item key="/scale/2&scale">
            <NavLink to="/scale/2&scale">双人</NavLink>
          </Menu.Item>
          <Menu.Item key="/scale/4&scale">
            <NavLink to="/scale/4&scale"> 四人</NavLink>
          </Menu.Item>
          <Menu.Item key="/scale/8&scale">
            <NavLink to="/scale/8&scale"> 包间（8-12人）</NavLink>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="/staff" icon={<TeamOutlined />} title="餐厅工作人员资料">
          <Menu.Item key="/staff/witer">
            <NavLink to="/staff/witer">服务员</NavLink>{" "}
          </Menu.Item>
          <Menu.Item key="/staff/chef">
            <NavLink to="/staff/chef">厨师</NavLink>
          </Menu.Item>
          <Menu.Item key="/staff/master">
            <NavLink to="/staff/master">店长</NavLink>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="/join" icon={<FileOutlined />}>
          <NavLink to="/join">店铺介绍</NavLink>
        </Menu.Item>
        <Menu.Item key="/shopping" icon={<FileOutlined />}>
          <NavLink to="/shopping">购物车</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Siders;
