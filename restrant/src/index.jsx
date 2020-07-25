import React from "react";
import ReactDOM from "react-dom";
import { Layout, Breadcrumb } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import routers from "./routes";
import { flattenRouters } from "./utils";
import Siders from "./components/sider";
import "./index.css";
import "./mock/gourmet";
import "./mock/drinkAdesert";

const routes = flattenRouters(routers);

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const match = pathname.split("/").filter((x) => x);
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {match.map((value, index) => {
        const to = `/${match.slice(0, index + 1).join("/")}`;
        const menu = routes.find((m) => m.path === to);
        return (
          <Breadcrumb.Item key={to}>{menu ? menu.name : value}</Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

const Content = (
  <Switch>
    {routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        render={({ match }) => <route.component match={match} />}
        exact
      />
    ))}
  </Switch>
);

const App = () => (
  <BrowserRouter>
    <Layout style={{ minHeight: "100vh" }}>
      <Siders />
      <Layout className="site-layout">
        <Layout.Content style={{ margin: "0 16px" }}>
          <Breadcrumbs />
          {Content}
        </Layout.Content>
      </Layout>
    </Layout>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
