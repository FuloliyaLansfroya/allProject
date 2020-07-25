import React, { Component } from "react";
import Cards from "../../components/Cards";
import axios from "../../interceptor";
import "../../mock/shopping";
import { Row, Col, Button, Divider, Space, Modal, Tabs } from "antd";

const { TabPane } = Tabs;

class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      visible: false,
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "test.com/shopping",
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

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  getAllPrice = (list) => {
    let price = 0;
    list.map((item) => {
      price += item.price;
      return null;
    });
    return price;
  };

  modalSlot = () => {
    const { list } = this.state;
    return (
      <>
        <p>
          所有菜的价格为
          <span style={{ fontSize: 26, color: "red" }}>
            {this.getAllPrice(list)}元
          </span>
          元
        </p>
        <p>请选择支付方式</p>
        <Tabs defaultActiveKey="1">
          <TabPane tab="微信支付" key="1">
            微信支付
          </TabPane>
          <TabPane tab="支付宝支付" key="2">
            支付宝支付
          </TabPane>
        </Tabs>
      </>
    );
  };

  render() {
    const { list } = this.state;
    const slot = (
      <>
        <Button>删除</Button>
        <Divider></Divider>
      </>
    );
    return (
      <>
        <Row style={{ maxHeight: 700 }}>
          <Col span={16}>
            <Cards list={list} slot={slot} span={7} type="drinkAdesert" />
            <Space>
              总价:
              <span style={{ fontSize: 26, color: "red" }}>
                {this.getAllPrice(list)}元
              </span>
              <Button type="primary" onClick={this.showModal}>
                支付
              </Button>
            </Space>
          </Col>

          <Col span={8} style={{ overflowY: "scroll", overflowX: "hidden" }}>
            <h2>推荐菜品</h2>
            <Cards list={list} span={20} type="drinkAdesert" />
          </Col>
        </Row>
        <Modal
          title="支付"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {this.modalSlot()}
        </Modal>
      </>
    );
  }
}

export default Shopping;
