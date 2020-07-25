import React, { Component } from "react";
import Cards from "../../components/Cards";
import { Tabs } from "antd";
import axios from "../../interceptor";
const { TabPane } = Tabs;

class Gourmet extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      list: [],
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "test.com/gourmet",
    }).then((res) => {
      console.log(res);
      const { code, data } = res.data;
      const { list } = data;
      if (code === "0") {
        this.setState({
          list,
        });
      }
    });
  }

  callback(key) {
    console.log(key);
  }

  render() {
    const { list } = this.state;
    return (
      <>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="川菜" key="1">
            <Cards list={list} span={8} type="gourmet"/>
          </TabPane>
          <TabPane tab="湘菜" key="2">
            <Cards list={list} span={8} type="gourmet" />
          </TabPane>
          <TabPane tab="东北菜" key="3">
            <Cards list={list} type="gourmet" />
          </TabPane>
        </Tabs>
      </>
    );
  }
}

export default Gourmet;
