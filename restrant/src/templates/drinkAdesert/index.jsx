import React, { Component } from "react";
import Cards from "../../components/Cards";
import axios from "../../interceptor";
import { Tabs } from "antd";

const { TabPane } = Tabs;

class DrinkAdesert extends Component {
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
      url: "test.com/drinkAdesert",
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
          <TabPane tab="饮料" key="1">
            <Cards list={list} span={8} type="drinkAdesert" />
          </TabPane>
          <TabPane tab="糕点" key="2">
            <Cards list={list} span={8} type="drinkAdesert" />
          </TabPane>
          <TabPane tab="酒" key="3">
            <Cards list={list} type="drinkAdesert" />
          </TabPane>
          <TabPane tab="小吃" key="4">
            <Cards list={list} />
          </TabPane>
        </Tabs>
      </>
    );
  }
}

export default DrinkAdesert;
