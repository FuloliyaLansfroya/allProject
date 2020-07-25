import React, { Component } from "react";
import {
  PageHeader,
  Button,
  Tag,
  Row,
  Col,
  Card,
  List,
  Typography,
  Tabs,
  Modal,
} from "antd";
import PropTypes from "prop-types";
import { createHashHistory } from "history";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;
const { Meta } = Card;
const history = createHashHistory();

const Content = ({ children, extraContent }) => {
  return (
    <Row>
      <div style={{ flex: 1 }}>{children}</div>
      <div className="image">{extraContent}</div>
    </Row>
  );
};
class DetailTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onBack = () => {
    history.go(-1);
  };

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

  content = () => {
    const { type, count, data } = this.props;
    const { list } = data;
    console.log(type);
    return (
      <>
        <Row gutter={16}>
          <Col span={12}>
            {type === "gourmet" ? (
              <Card
                bordered={false}
                cover={<img src={require("../../assert/1.png")} alt="" />}
              >
                <Meta title={data.dishName} description={data.introduce} />
              </Card>
            ) : (
              <></>
            )}
            {type === "drinkAdesert" ? (
              <Card
                bordered={false}
                cover={<img src={require("../../assert/1.jpg")} alt="" />}
              >
                <Meta title={data.dishName} description={data.introduce} />
              </Card>
            ) : (
              <></>
            )}
            {type === "scale" ? (
              <Card
                bordered={false}
                cover={
                  <img src={require(`../../assert/${count}.jpg`)} alt="" />
                }
              />
            ) : (
              <></>
            )}
            {type === "join" ? (
              <Card
                bordered={false}
                cover={<img src={require("../../assert/10.jpg")} alt="" />}
              />
            ) : (
              <></>
            )}
          </Col>
          <Col span={12}>
            {type === "gourmet" || type === "drinkAdesert" ? (
              <Tabs defaultActiveKey="1">
                <TabPane tab="配料详情" key="1">
                  <List
                    bordered
                    dataSource={list}
                    renderItem={(item) => (
                      <List.Item>
                        <Typography.Text mark>{item.name}: </Typography.Text>
                        {item.innerValue}
                      </List.Item>
                    )}
                  />
                </TabPane>
                <TabPane tab="价格详情" key="2">
                  <List bordered>
                    <List.Item>
                      <Typography.Text mark>原价:</Typography.Text>
                      {data.price}元
                    </List.Item>
                    <List.Item>
                      <Typography.Text mark>现价:</Typography.Text>
                      {data.sellPrice}元
                    </List.Item>
                  </List>
                </TabPane>
              </Tabs>
            ) : (
              <></>
            )}
            {type === "scale" ? (
              <Tabs defaultActiveKey="1">
                <TabPane tab="餐桌详情" key="1">
                  <List
                    bordered
                    dataSource={data.list}
                    renderItem={(item) => (
                      <List.Item>
                        <Typography.Text mark>{item.name}:</Typography.Text>{" "}
                        {item.innerValue}
                      </List.Item>
                    )}
                  />
                </TabPane>
              </Tabs>
            ) : (
              <></>
            )}
            {type === "join" ? (
              <Tabs defaultActiveKey="1">
                <TabPane tab="详细信息" key="1">
                  <List
                    bordered
                    dataSource={data.list}
                    renderItem={(item) => (
                      <List.Item>
                        <Typography.Text mark>{item.name}</Typography.Text>{" "}
                        {item.innerValue}
                      </List.Item>
                    )}
                  />
                </TabPane>
              </Tabs>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </>
    );
  };

  getBtn = (type) => {
    if (type === "gourmet" || type === "drinkAdesert") {
      return [
        <Button key="2">
          <NavLink to="/shopping">加入购物车</NavLink>
        </Button>,
        <Button key="1" type="primary" onClick={this.showModal}>
          购买
        </Button>,
      ];
    }
    if (type === "scale") {
      return [
        <Button key="1" type="primary" onClick={this.showModal}>
          预定
        </Button>,
      ];
    }
  };

  modalSlot = (type) => {
    const { data } = this.props;
    if (type === "gourmet" || type === "drinkAdesert") {
      return (
        <>
          <p>
            这个菜的价格为
            <span style={{ fontSize: 26, color: "red" }}>
              {data.sellPrice}元
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
    }
    if (type === "scale") {
      return (
        <>
          <p>
            这个位置的价格为
            <span style={{ color: "red" }}>{data.sellPrice}</span>元
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
    }
  };

  render() {
    const { type, data } = this.props;
    return (
      <>
        <PageHeader
          title={data.dishName}
          onBack={
            type === "gourmet" || type === "drinkAdesert" ? this.onBack : null
          }
          className="site-page-header"
          style={{ backgroundColor: "white" }}
          tags={<Tag color="blue">Running</Tag>}
          extra={this.getBtn(type)}
        >
          <Content>{this.content()}</Content>
        </PageHeader>
        <Modal
          title="购买"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {this.modalSlot(type)}
        </Modal>
      </>
    );
  }
}

DetailTop.propTypes = {
  type: PropTypes.string.isRequired,
  count: PropTypes.string,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

DetailTop.defaultProps = {
  count: "0",
};

export default DetailTop;
